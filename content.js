  // Scrolls the textColumn element in increments, checking for a URL change after each scroll, up to 5 times
  function scrollUntilUrlChanges(direction = "down", maxAttempts = 10, scrollAmount = 50, delay = 500) {
    const textColumn = document.getElementsByClassName('textColumn')[0];
    if (!textColumn) return;
    let attempts = 0;
    const initialHref = location.href;

    function doScroll() {
      if (location.href !== initialHref) {
        // URL changed, stop
        return;
      }
      if (attempts >= maxAttempts) {
        // Max attempts reached, stop
        return;
      }
      attempts++;
      textColumn.scrollBy({ top: direction === "down" ? scrollAmount : -scrollAmount, behavior: 'smooth' });
      setTimeout(doScroll, delay);
    }
    doScroll();
  }
(async () => {

  const ROOT_ID = "sefaria-iframe-plugin-root";

  const BASE_URL = "https://sefaria.github.io/extensions/plugins";


  const toAbsoluteUrl = (maybeRelative) => {
    if (!maybeRelative) return "";
    try {
      return new URL(maybeRelative, BASE_URL).toString();
    } catch {
      return maybeRelative;
    }
  };


  const getPlugins = async () => {
    try {
      const resp = await fetch(`${BASE_URL}/index.json`);
      if (!resp.ok) throw new Error("Failed to fetch plugins");
      const data = await resp.json();
      const raw = Array.isArray(data) ? data : (data?.plugins || []);
      return raw.map((item) => ({
        ...item,
        url: toAbsoluteUrl(item.url),
        icon: toAbsoluteUrl(item.icon)
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const PLUGINS = await getPlugins();

  console.log("Loaded plugins:", PLUGINS);

  if (document.getElementById(ROOT_ID)) return;

  function parseSrefFromUrl() {
    try {
      // Remove leading/trailing slashes and get the first path segment
      const path = location.pathname.replace(/^\/+|\/+$/g, "");
      if (!path) return null;
      
      // Get everything before the query string
      const ref = path.split('?')[0];
      
      // The ref is the first part of the path (e.g., "Genesis.2.9")
      return decodeURIComponent(ref);
    } catch {
      return null;
    }
  }

  function makeRoot() {
    const root = document.createElement("div");
    root.id = ROOT_ID;
    document.documentElement.appendChild(root);
    root.innerHTML = `
      <div class="panel">
        <div class="header">
          <button id="backBtn" style="visibility:hidden">← Back</button>
          <h1 id="title">Sefaria Plugins</h1>
          <button id="closeBtn">Close</button>
        </div>
        <div class="body">
          <div class="search-row">
            <input id="filterInput" type="search" placeholder="Filter plugins by name or description…" />
          </div>
          <div id="list" class="list"></div>
          <div id="iframeWrap" class="iframe-wrap" style="display:none">
              <iframe id="pluginFrame" allow="clipboard-write" sandbox="allow-scripts allow-popups allow-same-origin allow-forms"></iframe>
          </div>
        </div>
      </div>
    `;
    return root;
  }

  function renderList(listEl, filter) {
    listEl.replaceChildren();
    const q = (filter || "").toLowerCase();
    const rows = PLUGINS.filter(p => (p.name + " " + (p.description || "")).toLowerCase().includes(q));

    if (!rows.length) {
      const empty = document.createElement("div");
      empty.className = "plugin-item";
      empty.textContent = "No plugins match your filter.";
      listEl.appendChild(empty);
      return;
    }

    for (const p of rows) {
      const item = document.createElement("div");
      item.className = "plugin-item";
      item.innerHTML = `
        <img class="icon" src="${p.icon}" alt="icon" />
        <div>
          <div class="name">${p.name}</div>
          <div class="desc">${p.description || ""}</div>
        </div>
      `;
      item.addEventListener("click", () => openPlugin(p));
      listEl.appendChild(item);
    }
  }

  let currentPlugin = null;
  let pluginOrigin = null;
  let frameEl = null;
  let listEl = null;
  let backBtn = null;
  let titleEl = null;
  let iframeWrap = null;

  function openRefLink(ref, text) {
    const cleanRef = (ref || "").trim();
    if (!cleanRef) return;

    const href = cleanRef.startsWith("/") ? cleanRef : `/${cleanRef}`;
    const anchor = document.createElement("a");
    anchor.className = "refLink";
    anchor.href = href;
    anchor.dataset.ref = cleanRef.replace(/^\//, "");
    anchor.textContent = text || cleanRef;

    const textRange = document.getElementsByClassName('rangeSpan');
    if (textRange.length > 0) {
      textRange[0].appendChild(anchor);
      anchor.click();
      return;
    }
    else {
      // Fallback: navigate directly
      assignUrl(href);
    }
    
  }

  function assignUrl(nextUrl) {
      try {
        const target = new URL(nextUrl, location.href).toString();
        location.assign(target);
      } catch (err) {
        console.error("[Plugin] Invalid navigation URL", err);
      }
  }

  function openPlugin(plugin) {
    currentPlugin = plugin;
    try {
      pluginOrigin = new URL(plugin.url).origin;
    } catch {
      pluginOrigin = "*";
    }

    titleEl.textContent = plugin.name;
    backBtn.style.visibility = "visible";
    listEl.style.display = "none";
    iframeWrap.style.display = "block";
    frameEl.src = plugin.url;

    // Hide the filter input when a plugin is open
    filterInput.style.display = "none";

    frameEl.onload = () => {
      const sref = parseSrefFromUrl();
      if (sref && frameEl.contentWindow) {
        frameEl.contentWindow.postMessage({ type: "sref:update", sref }, pluginOrigin || "*");
      }
    };
  }

  function backToList() {
    currentPlugin = null;
    pluginOrigin = null;
    titleEl.textContent = "Sefaria Plugins";
    backBtn.style.visibility = "hidden";
    iframeWrap.style.display = "none";
    frameEl.src = "about:blank";
    listEl.style.display = "flex";

    // Unhide the filter input when returning to the list
    filterInput.style.display = "";
  }

  function handlePageMessages(ev) {
    if (!currentPlugin) return;
    if (pluginOrigin && pluginOrigin !== "*" && ev.origin !== pluginOrigin) return;

    const data = ev.data;
    if (!data || typeof data !== "object") return;

    if (data.type === "plugin:ready") {
      const sref = parseSrefFromUrl();
      if (sref && frameEl.contentWindow) {
        frameEl.contentWindow.postMessage({ type: "sref:update", sref }, pluginOrigin || "*");
      }
    } else if (data.type === "plugin:request-sref") {
      const sref = parseSrefFromUrl();
      if (frameEl.contentWindow) {
        frameEl.contentWindow.postMessage({ type: "sref:response", sref }, pluginOrigin || "*");
      }
    } else if (data.type === "plugin:log") {
      console.log("[Plugin]", data.message);
    } else if (data.type === "plugin:navigate-segment") {
      if (typeof data.increment === "number") {
        navigateSegment(data.increment);
      } else if (data.direction === "previous") {
        scrollUntilUrlChanges("up");
      } else if (data.direction === "next") {
        scrollUntilUrlChanges("down");
      }
    } else if (data.type === "plugin:navigate-url") {
      // Navigate the host page when the plugin requests it
      const nextUrl = typeof data.url === "string" ? data.url.trim() : "";
      if (!nextUrl) return;
      assignUrl(nextUrl);
    } else if (data.type === "open-ref" || data.type === "plugin:open-ref") {
      const ref = typeof data.ref === "string" ? data.ref : "";
      const label = typeof data.label === "string" ? data.label : "";
      openRefLink(ref, label);
    }
  }

  function navigateSegment(increment) {
    // remove all spaces and : and . and , from the ref for comparison
    const _cleanRef = (ref) => ref ? ref.replace(/[\s:.,]/g, "").toLowerCase() : null;

    if (!increment) return;
    const segments = document.getElementsByClassName("segment");
    for (let i = 0; i < segments.length; i++) {
      const el = segments[i];
      if (_cleanRef(el.dataset?.ref) === _cleanRef(parseSrefFromUrl())) {
        const next = segments[i + increment];
        if (next) {
          next.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        break;
      }
    }
  }

  function watchSref() {
    let last = parseSrefFromUrl();
    let lastHref = location.href;

    const checkForUrlChange = () => {
      const currentHref = location.href;
      if (currentHref !== lastHref) {
        lastHref = currentHref;
        notify();
      }
    };

    const notify = () => {
      const next = parseSrefFromUrl();
      if (next !== last) {
        last = next;
        if (currentPlugin && frameEl?.contentWindow && next) {
          frameEl.contentWindow.postMessage({ type: "sref:update", sref: next }, pluginOrigin || "*");
        }
      }
    };

    // Watch for URL changes by polling and on title changes
    const urlCheckInterval = setInterval(checkForUrlChange, 100);

    // Watch for title changes which often coincide with URL updates
    const observer = new MutationObserver(checkForUrlChange);
    observer.observe(document.querySelector('title') || document.head, {
      subtree: true,
      characterData: true,
      childList: true
    });

    // Watch for back/forward navigation
    window.addEventListener("popstate", notify);

    // Cleanup function to prevent memory leaks
    document.addEventListener('unload', () => {
      clearInterval(urlCheckInterval);
      observer.disconnect();
    });
    
    // Initial check
    notify();
  }

  const root = makeRoot();
  const closeBtn = root.querySelector("#closeBtn");
  backBtn = root.querySelector("#backBtn");
  titleEl = root.querySelector("#title");
  const filterInput = root.querySelector("#filterInput");
  listEl = root.querySelector("#list");
  frameEl = root.querySelector("#pluginFrame");
  iframeWrap = root.querySelector("#iframeWrap");

  renderList(listEl, "");

  backBtn.addEventListener("click", backToList);
  closeBtn.addEventListener("click", () => { root.style.display = "none"; });

  filterInput.addEventListener("input", (e) => {
    renderList(listEl, e.target.value || "");
  });

  chrome.runtime.onMessage.addListener((msg) => {
    if (msg?.type === "SEFARIA_IFRAME_LAUNCHER_TOGGLE") {
      root.style.display = (root.style.display === "none" || !root.style.display) ? "block" : "none";
    }
  });

  window.addEventListener("message", handlePageMessages);
  watchSref();
})();
