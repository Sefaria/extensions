Guidance for AI coding helpers working in this repo.

PostMessage actions
- plugin:ready → Send from plugin to host once iframe is ready; host responds with sref:update (current ref).
- plugin:request-sref → Ask host for the current ref; host replies with sref:response { sref }.
- sref:update → Sent from host to plugin whenever the page ref changes or after plugin:ready.
- sref:response → Direct response from host to a plugin:request-sref with { sref }.
- plugin:open-ref / open-ref → Ask host to open/navigate to a Sefaria ref; include { ref, label }.
- plugin:navigate-segment → Request host to move among segments; either { increment: number } or { direction: "previous"|"next" }.
- plugin:navigate-url → Request host to navigate to a specific URL; include { url }.
- plugin:log → Send diagnostics from plugin to host console; include { message }.

Adding a new plugin
- Create a new folder under plugins/ with a plugin.html and an icon (e.g., icon.png or .svg).
- Add the plugin entry to plugins/index.json with name, url, icon, and description so it appears in the panel.
- Inside plugin.html, post plugin:ready when loaded so the host can send sref:update; use plugin:request-sref if you need the current ref on demand.

plugin-ai.sefaria.org endpoints
- Prompts: POST https://plugin-ai.sefaria.org/api/prompt with { prompt } to get summarizations/answers (used by Librarian).
- Translation: POST https://plugin-ai.sefaria.org/api/translate with { text, source_language } to translate content (used by Translation plugin).
- Image generation: POST https://plugin-ai.sefaria.org/api/generate-image with { text, reference, style? } to create educational illustrations.
