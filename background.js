chrome.action.onClicked.addListener(async (tab) => {
  if (!tab?.id) return;
  try {
    await chrome.tabs.sendMessage(tab.id, { type: "SEFARIA_IFRAME_LAUNCHER_TOGGLE" });
  } catch (e) {
    // Content script not ready or not on a matching URL.
  }
});
