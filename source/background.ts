chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
	// This listener is triggered when a download's filename is being determined
	console.log('onDeterminingFilename:', item);
	if (
		// Check if the download is from chatgpt.com and is a WebP image
		new URL(item.url.replace('blob:', '')).hostname == 'chatgpt.com' &&
		item.mime == 'image/webp'
	) {
		// Cancel the download if it is a WebP image from chatgpt.com
		chrome.downloads.cancel(item.id);
	} else {
		suggest();
	}
});
