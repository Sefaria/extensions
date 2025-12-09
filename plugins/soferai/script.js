(() => {
  const audioEl = document.getElementById("audio");
  const seekEl = document.getElementById("seek");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const statusEl = document.getElementById("status");
  const startBtn = document.getElementById("startBtn");
  const followToggle = document.getElementById("followToggle");
  const audioUrlInput = document.getElementById("audioUrl");
  const apiTokenInput = document.getElementById("apiToken");
  const apiUidInput = document.getElementById("apiUid");
  const sectionRefsInput = document.getElementById("sectionRefs");
  const metaTitleEl = document.getElementById("metaTitle");
  const metaDurationEl = document.getElementById("metaDuration");
  const metaLangEl = document.getElementById("metaLang");
  const metaSpeakersEl = document.getElementById("metaSpeakers");
  const segmentsListEl = document.getElementById("segmentsList");
  const currentRefEl = document.getElementById("currentRef");
  const timeLabel = document.getElementById("timeLabel");
  const durationLabel = document.getElementById("durationLabel");

  let transcription = null;
  let alignedTimestamps = [];
  let lastNavigatedRef = null;
  let isSeeking = false;

  function setStatus(msg) {
    statusEl.textContent = msg;
  }

  function formatTime(seconds) {
    if (Number.isNaN(seconds) || seconds == null) return "0:00";
    const s = Math.max(0, Math.floor(seconds));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${r.toString().padStart(2, "0")}`;
  }

  function parseRefs(input) {
    return (input || "")
      .split(/[\n,]/)
      .map((r) => r.trim())
      .filter(Boolean);
  }

  async function fetchTranscription(uid, token) {
    const url = `https://api.sofer.ai/v1/transcriptions/${uid}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) {
      throw new Error(`Failed to fetch transcription: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }

  function updateSegmentsList(ts) {
    segmentsListEl.replaceChildren();
    if (!ts || !ts.length) {
      segmentsListEl.textContent = "No timestamps available.";
      return;
    }
    const rows = [];
    let last = null;
    ts.forEach((t) => {
      if (t.segment_ref && t.segment_ref !== last) {
        rows.push({ ref: t.segment_ref, at: t.start || 0 });
        last = t.segment_ref;
      }
    });
    if (!rows.length) {
      segmentsListEl.textContent = "No segment refs were aligned.";
      return;
    }
    const frag = document.createDocumentFragment();
    rows.forEach((row) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip-btn";
      btn.innerHTML = `<strong>${row.ref}</strong><span>${formatTime(row.at)}</span>`;
      btn.dataset.time = row.at;
      btn.addEventListener("click", () => {
        audioEl.currentTime = Number(row.at) || 0;
        timeLabel.textContent = formatTime(audioEl.currentTime);
        audioEl.play();
      });
      frag.appendChild(btn);
    });
    segmentsListEl.appendChild(frag);
  }

  function updateMeta(info) {
    metaTitleEl.textContent = info?.title || "—";
    metaDurationEl.textContent = info?.duration ? formatTime(info.duration) : "—";
    metaLangEl.textContent = info?.primary_language || "—";
    metaSpeakersEl.textContent = info?.num_speakers || "—";
  }

  function handleFollow(currentRef) {
    if (!followToggle.checked || !currentRef || currentRef === lastNavigatedRef) return;
    lastNavigatedRef = currentRef;
    window.parent.postMessage({ type: "plugin:open-ref", ref: currentRef, label: currentRef }, "*");
  }

  function findCurrentSegmentRef(currentTime) {
    if (!alignedTimestamps.length) return null;
    let current = null;
    for (const entry of alignedTimestamps) {
      if (entry.start != null && entry.start <= currentTime) {
        current = entry.segment_ref || current;
      } else {
        break;
      }
    }
    return current;
  }

  function onTimeUpdate() {
    if (!audioEl.duration) return;
    if (!isSeeking) {
      seekEl.value = audioEl.currentTime;
    }
    timeLabel.textContent = formatTime(audioEl.currentTime);
    durationLabel.textContent = formatTime(audioEl.duration);
    const ref = findCurrentSegmentRef(audioEl.currentTime);
    currentRefEl.textContent = ref || "No segment yet";
    handleFollow(ref);
  }

  function resetPlayer() {
    alignedTimestamps = [];
    lastNavigatedRef = null;
    currentRefEl.textContent = "No segment yet";
    segmentsListEl.textContent = "";
    seekEl.value = 0;
    timeLabel.textContent = "0:00";
  }

  playBtn.addEventListener("click", () => audioEl.play());
  pauseBtn.addEventListener("click", () => audioEl.pause());
  audioEl.addEventListener("timeupdate", onTimeUpdate);
  audioEl.addEventListener("loadedmetadata", () => {
    seekEl.max = audioEl.duration || 0;
    durationLabel.textContent = formatTime(audioEl.duration);
  });
  followToggle.addEventListener("change", () => {
    if (followToggle.checked) {
      lastNavigatedRef = null;
      const ref = findCurrentSegmentRef(audioEl.currentTime || 0);
      handleFollow(ref);
    }
  });
  seekEl.addEventListener("input", () => {
    isSeeking = true;
    audioEl.currentTime = Number(seekEl.value || 0);
  });
  seekEl.addEventListener("change", () => { isSeeking = false; });

  startBtn.addEventListener("click", async () => {
    const audioUrl = audioUrlInput.value.trim();
    const token = apiTokenInput.value.trim();
    const uid = apiUidInput.value.trim();
    const refs = parseRefs(sectionRefsInput.value);
    if (!audioUrl || !token || !uid) {
      setStatus("Audio URL, token, and UID are required.");
      return;
    }
    if (typeof window.refTranscription !== "function") {
      setStatus("Alignment module not loaded.");
      return;
    }
    startBtn.disabled = true;
    setStatus("Loading transcription…");
    try {
      const data = await fetchTranscription(uid, token);
      transcription = data;
      updateMeta(data.info || {});
      audioEl.src = audioUrl;
      resetPlayer();
      setStatus("Fetching refs and aligning…");
      const { aligned, segments } = await window.refTranscription(refs, data);
      const alignedWithRefs = (aligned || []).filter((t) => t.segment_ref);
      console.log("Ref transcription match result (with segment_refs only):", { aligned: alignedWithRefs, segments });
      alignedTimestamps = aligned || [];
      updateSegmentsList(alignedTimestamps);
      setStatus("Ready. Press play and enable Follow me to auto-navigate.");
      if (audioEl.duration) {
        seekEl.max = audioEl.duration;
      }
    } catch (err) {
      console.error(err);
      setStatus(err?.message || "Failed to load transcription.");
    } finally {
      startBtn.disabled = false;
    }
  });
})();
