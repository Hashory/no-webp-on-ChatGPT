chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
	console.log('onDeterminingFilename:', item);
	if (
		new URL(item.url).hostname == 'chatgpt.com' &&
		item.filename.endsWith('.webp')
	) {
		chrome.downloads.cancel(item.id);
	}
	suggest();
});
