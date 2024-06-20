chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.sendMessage(activeInfo.tabId, { action: "checkVisibility" });
  });
  
  chrome.windows.onFocusChanged.addListener(windowId => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "checkVisibility" });
      }
    });
  });
  