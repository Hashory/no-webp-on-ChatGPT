/**
 * This script is injected into the page to override the default behavior of downloading WebP images.
 */
const script = document.createElement('script'); // Create a script element
script.src = chrome.runtime.getURL('windowscript.js'); // Get the URL of the windowscript.js file
(document.head || document.documentElement).appendChild(script); // Append the script element to the document
