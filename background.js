// Listen for complete page loads
chrome.webNavigation.onCompleted.addListener(
    function (details) {
      if (details.frameId === 0) {
        chrome.scripting.executeScript({
          target: { tabId: details.tabId },
          files: ['content.js'],
        });
      }
    },
    { url: [{ urlMatches: 'https://www.linkedin.com/jobs/' }] }
  );
  
  // Listen for history state updates (e.g., AJAX navigation, URL changes without a full page reload)
  chrome.webNavigation.onHistoryStateUpdated.addListener(
    function (details) {
      if (details.frameId === 0) {
        chrome.scripting.executeScript({
          target: { tabId: details.tabId },
          files: ['content.js'],
        });
      }
    },
    { url: [{ urlMatches: 'https://www.linkedin.com/jobs/' }] }
  );