// Assign window script from content script
const script = document.createElement('script');
script.src = chrome.runtime.getURL('windowscript.js');
(document.head || document.documentElement).appendChild(script);
