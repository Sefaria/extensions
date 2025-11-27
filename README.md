# Sefaria Iframe Plugin Launcher (Chrome MV3)

Injects a floating panel on **sefaria.org / sefaria.org.il**. The panel lists plugins and loads the selected plugin inside an **iframe**. The extension exchanges `postMessage` events with the iframe to pass the current `sref` as navigation changes.

## Install
1. Extract this zip.
2. In Chrome, open `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and choose the `extension` folder.
5. Visit https://www.sefaria.org and click the toolbar icon to toggle the panel.

## Plugins JSON
Edit the hard-coded `PLUGINS` array in `extension/content.js`:
```json
[{
  "name": "YUtorah Plugin",
  "url": "https://yutorah.com.sefariaPlugin",
  "icon": "https://example.com/icon.png",
  "description": "A YUtorah Sefaria plugin"
},{
  "name": "Example Local Plugin",
  "url": "http://localhost:8000/index.html",
  "icon": "https://via.placeholder.com/96",
  "description": "Local dev plugin for testing postMessage bridge"
}]
```

## Example Plugin (Local Dev)
An example plugin is provided in `example-plugin/`. To run it locally:
```bash
cd example-plugin
python3 -m http.server 8000
```
Then, load the extension and select **Example Local Plugin** in the panel. The iframe will open `http://localhost:8000/index.html` and start receiving `sref` updates via `postMessage`.

### Message Protocol
**From extension → plugin (iframe):**
- `sref:update` — `{ type: "sref:update", sref }` sent on route changes and after plugin signals ready.
- `sref:response` — response to a request with `{ type: "sref:response", sref }`.

**From plugin → extension:**
- `plugin:ready` — ask the extension to send the current `sref`.
- `plugin:request-sref` — request the current `sref` on demand.
- `plugin:log` — log debug messages to the page console.

This approach is **Chrome Web Store compliant** because the plugin code runs on its own origin in an iframe; the extension does not execute remote code.

## Local Flask Static Server
A lightweight Flask app in `server.py` serves everything in `plugins/` (including `index.json` and the HTML plugins) as static files at `http://127.0.0.1:5000`.

1. Install Flask (ideally in a virtualenv): `pip install Flask`
2. Start the server from the repo root: `python server.py`
3. Visit a plugin directly (e.g., `http://127.0.0.1:5000/screen_reader.html`) or fetch `http://127.0.0.1:5000/index.json` for the plugin list.
