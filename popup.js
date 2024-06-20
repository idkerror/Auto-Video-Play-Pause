document.addEventListener('DOMContentLoaded', () => {
    const togglePause = document.getElementById('togglePause');
  
    // Load the saved setting
    chrome.storage.sync.get('pauseEnabled', data => {
      togglePause.checked = data.pauseEnabled !== false; // Default to true if not set
    });
  
    // Save the setting when changed
    togglePause.addEventListener('change', () => {
      chrome.storage.sync.set({ pauseEnabled: togglePause.checked });
    });
  });
  