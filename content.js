let wasPausedByExtension = false;

document.addEventListener("visibilitychange", () => {
  chrome.storage.sync.get('pauseEnabled', data => {
    if (data.pauseEnabled !== false) { // Default to true if not set
      handleVisibilityChange();
    }
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.storage.sync.get('pauseEnabled', data => {
    if (data.pauseEnabled !== false) { // Default to true if not set
      handleVisibilityChange();
    }
  });
});

function handleVisibilityChange() {
  const videos = document.querySelectorAll("video");
  if (document.visibilityState === "hidden") {
    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
        wasPausedByExtension = true;
      }
    });
  } else if (document.visibilityState === "visible" && wasPausedByExtension) {
    videos.forEach(video => {
      video.play();
    });
    wasPausedByExtension = false;
  }
}
