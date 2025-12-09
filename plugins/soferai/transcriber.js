
async function refTranscription(refs, transcription) {

  /* -------------------------- Basic Hebrew utilities -------------------------- */

  const MIN_HEBREW_WORD_LEN = 4;
  const WIGGLE_RANGE = 1;
  const MAX_ALLOWED_JUMP = 5;

  function normalizeHebrew(text) {
    if (!text) return "";
    let t = text;
    t = t.replace(/[\u0591-\u05BD\u05BF-\u05C7]/g, ""); // strip niqqud
    const finals = { "ך": "כ", "ם": "מ", "ן": "נ", "ף": "פ", "ץ": "צ" };
    t = t.replace(/[ךםןףץ]/g, ch => finals[ch] || ch);
    t = t.replace(/[.,;:"'()\-–—!?[\]{}<>\/\\־״׳]/g, " "); // punctuation to space
    t = t.replace(/\s+/g, " ").trim();
    return t;
  }

  function tokenizeHebrew(text) {
    const norm = normalizeHebrew(text);
    if (!norm) return [];
    return norm.split(" ");
  }

  /* ---------------------------- Load Sefaria refs ---------------------------- */

  async function loadSefariaRef(ref) {
    const url = `https://www.sefaria.org/api/texts/${encodeURIComponent(ref)}?commentary=0&pad=0`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed fetch for ref "${ref}": ${res.status}`);
    }
    const data = await res.json();
    if (!Array.isArray(data.he)) {
      throw new Error(`Sefaria response for ${ref} missing 'he' array`);
    }

    const baseRef = data.sectionRef || ref;

    return data.he.map((segText, idx) => {
      const segRef = `${baseRef}.${idx + 1}`.replace(" ", ".");
      return {
        segmentRef: segRef,
        rawText: segText,
        tokens: tokenizeHebrew(segText)
      };
    });
  }

  async function loadSegments(refArray) {
    const arrays = await Promise.all(refArray.map(loadSefariaRef));
    return arrays.flat(); // flatten into a single list
  }

  /* ------------------------- Build word → segment index ---------------------- */

  function buildWordIndex(segments) {
    const index = new Map(); // wordNorm -> Set(segmentIndex)

    segments.forEach((seg, segIdx) => {
      seg.tokens.forEach(word => {
        const w = normalizeHebrew(word);
        if (!w || w.length < MIN_HEBREW_WORD_LEN) return;

        let s = index.get(w);
        if (!s) {
          s = new Set();
          index.set(w, s);
        }
        s.add(segIdx);
      });
    });

    const finalIndex = new Map();
    for (const [word, set] of index.entries()) {
      finalIndex.set(word, Array.from(set).sort((a, b) => a - b));
    }
    return finalIndex;
  }

  /* --------------------------- Extract anchors ------------------------------ */

  function collectHebrewAnchors(timestamps, wordIndex) {
    const anchors = [];

    timestamps.forEach((entry, idx) => {
      if (!Array.isArray(entry.hebrew_word_format) || !entry.hebrew_word_format.includes("he"))
        return;

      const raw = entry.word;
      const norm = normalizeHebrew(raw);
      if (!norm || norm.length < MIN_HEBREW_WORD_LEN) return;

      const candidateSegments = wordIndex.get(norm);
      if (!candidateSegments) return;

      anchors.push({
        transcriptIndex: idx,
        wordRaw: raw,
        wordNorm: norm,
        candidateSegments
      });
    });

    return anchors;
  }

  /* ----------------------------- Segment assignment ------------------------- */

  function chooseSegmentIndex(prevSeg, candidates) {
    if (!candidates || candidates.length === 0) return null;

    if (prevSeg == null) return candidates[0]; // first match

    const expected = prevSeg + 1;
    const set = new Set(candidates);

    // Perfect match
    if (set.has(expected)) return expected;

    // Wiggle
    for (let d = 1; d <= WIGGLE_RANGE; d++) {
      if (set.has(expected + d)) return expected + d;
      if (expected - d >= prevSeg && set.has(expected - d)) return expected - d;
    }

    // Any >= prev
    for (const s of candidates) {
      if (s >= prevSeg) return s;
    }

    // fallback
    return candidates[0];
  }

  function assignSegments(anchors) {
    const map = new Map();
    let prevSeg = null;

    for (const a of anchors) {
      const seg = chooseSegmentIndex(prevSeg, a.candidateSegments);
      if (seg != null) {
        map.set(a.transcriptIndex, seg);
        prevSeg = seg;
      } else {
        map.set(a.transcriptIndex, null);
      }
    }
    return map;
  }

  /* ----------------------- Apply alignment to transcription ------------------ */

  function applyAlignment(transcription, alignmentMap, segments) {
    const updated = JSON.parse(JSON.stringify(transcription));
    const segRefByIndex = segments.map(s => s.segmentRef);

    updated.timestamps.forEach((t, idx) => {
      const segIdx = alignmentMap.get(idx);
      if (segIdx != null && segIdx >= 0) {
        t.segment_ref = segRefByIndex[segIdx];
      } else if (!t.segment_ref) {
        t.segment_ref = null;
      }
    });

    return updated;
  }

  /* ------------------------------ Smoothing logic --------------------------- */

  function cleanOutOfOrder(transcription, segments) {
    const segRefToIndex = new Map();
    segments.forEach((seg, idx) => segRefToIndex.set(seg.segmentRef, idx));

    let anchors = [];
    transcription.timestamps.forEach((t, idx) => {
      if (t.segment_ref && segRefToIndex.has(t.segment_ref)) {
        anchors.push({ transcriptIndex: idx, segIndex: segRefToIndex.get(t.segment_ref) });
      }
    });

    if (anchors.length < 2) return transcription;

    const removeIdx = new Set();

    function countForward(anchors, k) {
      let c = 0;
      for (let i = k; i < anchors.length - 1; i++) {
        if (anchors[i + 1].segIndex >= anchors[i].segIndex) c++;
        else break;
      }
      return c;
    }

    let i = 0;
    while (i < anchors.length - 1) {
      const curr = anchors[i];
      const next = anchors[i + 1];

      if (next.segIndex >= curr.segIndex) {
        i++;
        continue;
      }

      // Conflict — cluster logic
      let leftStart = i;
      while (leftStart > 0 && anchors[leftStart - 1].segIndex <= anchors[leftStart].segIndex)
        leftStart--;
      const leftSize = i - leftStart + 1;

      let rightEnd = i + 1;
      while (
        rightEnd < anchors.length - 1 &&
        anchors[rightEnd + 1].segIndex >= anchors[rightEnd].segIndex
      )
        rightEnd++;
      const rightSize = rightEnd - (i + 1) + 1;

      let removeLeft = false;
      if (rightSize > leftSize) removeLeft = true;
      else if (rightSize === leftSize) {
        removeLeft = countForward(anchors, i + 1) > countForward(anchors, i);
      }

      if (removeLeft) {
        removeIdx.add(anchors[i].transcriptIndex);
        anchors.splice(i, 1);
      } else {
        removeIdx.add(anchors[i + 1].transcriptIndex);
        anchors.splice(i + 1, 1);
      }
    }

    const cleaned = JSON.parse(JSON.stringify(transcription));
    cleaned.timestamps.forEach((t, idx) => {
      if (removeIdx.has(idx)) t.segment_ref = null;
    });

    return cleaned;
  }

  function smoothPropagation(transcription, segments) {
    const segRefToIndex = new Map();
    segments.forEach((s, i) => segRefToIndex.set(s.segmentRef, i));

    const ts = transcription.timestamps;
    const anchors = ts
      .map((t, i) => (t.segment_ref && segRefToIndex.has(t.segment_ref) ? i : null))
      .filter(i => i !== null);

    if (anchors.length === 0) return transcription;

    for (let a = 0; a < anchors.length - 1; a++) {
      const start = anchors[a];
      const end = anchors[a + 1];
      const ref = ts[start].segment_ref;
      for (let j = start + 1; j < end; j++) {
        if (!ts[j].segment_ref) ts[j].segment_ref = ref;
      }
    }

    // Extend last anchor forward
    const last = anchors[anchors.length - 1];
    const lastRef = ts[last].segment_ref;
    for (let j = last + 1; j < ts.length; j++) {
      if (!ts[j].segment_ref) ts[j].segment_ref = lastRef;
    }

    return transcription;
  }

  function verifyMonotone(transcription, segments) {
    const segRefToIndex = new Map();
    segments.forEach((s, i) => segRefToIndex.set(s.segmentRef, i));

    let prev = null;
    transcription.timestamps.forEach((t, i) => {
      if (!t.segment_ref || !segRefToIndex.has(t.segment_ref)) return;
      const idx = segRefToIndex.get(t.segment_ref);

      if (prev != null) {
        if (idx < prev) {
          t.segment_ref = null;
          return;
        }
        if (idx - prev > MAX_ALLOWED_JUMP) {
          t.segment_ref = null;
          return;
        }
      }

      prev = idx;
    });

    return transcription;
  }

  /* ----------------------------- PIPELINE RUN ------------------------------- */

  const segments = await loadSegments(refs);
  const wordIndex = buildWordIndex(segments);
  const anchors = collectHebrewAnchors(transcription.timestamps, wordIndex);
  const alignmentMap = assignSegments(anchors);

  let updated = applyAlignment(transcription, alignmentMap, segments);
  updated = cleanOutOfOrder(updated, segments);
  updated = smoothPropagation(updated, segments);
  updated = verifyMonotone(updated, segments);

  return {
    aligned: updated.timestamps || [],
    segments
  };
}

window.refTranscription = refTranscription;
