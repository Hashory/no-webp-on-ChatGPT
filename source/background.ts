chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
	console.log('onDeterminingFilename:', item);
	if (
		new URL(item.url.replace('blob:', '')).hostname == 'chatgpt.com' &&
		item.mime == 'image/webp'
	) {
		chrome.downloads.cancel(item.id);
	} else {
		suggest();
	}
});
