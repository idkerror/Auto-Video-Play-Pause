**Step 1: Set Up Your Extension Directory**

Create a new directory for your extension. Inside this directory, you'll need the following files:

1. manifest.json
2. background.js
3. content.js
4. popup.html
5. popup.js

**Ensure your extension directory looks like this:**

my-extension/

├── icons/

│   ├── icon16.png

│   ├── icon48.png

│   ├── icon128.png

├── background.js

├── content.js

├── manifest.json

**Step 2: Download manifest.json**

This file tells Chrome about your extension and what permissions it needs. Create a file named manifest.json with the following content:

**Step 3: Download background.js**

This script will listen for tab and window focus changes and send a message to the content script.

**Step 4: Download content.js**

This script will pause the video when the tab is not visible.

**Step 5: Download popup.js and popup.html**

This script will provide visual effects.

**Step 6: Add Icons**

Create an icons directory in your extension folder and add icon files (icon16.png, icon48.png, icon128.png). These are used for the extension's icon in the browser.

**Step 7: Load the Extension**

• Open Chrome and go to chrome://extensions/.

• Enable "Developer mode" using the toggle switch in the top right corner.

• Click "Load unpacked" and select the directory containing your extension files.

• Now, your extension should be active and will pause videos when you switch tabs or applications.
