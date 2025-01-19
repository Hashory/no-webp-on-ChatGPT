const originalCreateObjectURL = URL.createObjectURL;
URL.createObjectURL = function (blob, ...args) {
	console.log('Created Blob URL', blob, args);
	if (blob instanceof Blob && blob.type === 'image/webp') {
		const reader = new FileReader();
		reader.onload = function () {
			const img = new Image();
			img.onload = function () {
				const canvas = document.createElement('canvas');
				canvas.width = img.width;
				canvas.height = img.height;
				const ctx = canvas.getContext('2d');
				ctx?.drawImage(img, 0, 0);
				canvas.toBlob(function (newBlob) {
					if (newBlob) {
						const newUrl = originalCreateObjectURL(newBlob, ...args);
						console.log('Converted Blob URL', newUrl);

						// Create a link element to download the converted image
						const link = document.createElement('a');
						link.href = newUrl;

						// Get current date and time
						const now = new Date();
						const formattedDate = now.toISOString().replace(/[:.]/g, '-');
						link.download = `chatgpt-image-${formattedDate}.png`;

						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);

						return newUrl;
					}
				}, 'image/png');
			};
			img.src = reader.result as string;
		};
		reader.readAsDataURL(blob);
		return originalCreateObjectURL(blob, ...args); // Return undefined to prevent original URL creation
	}
	return originalCreateObjectURL(blob, ...args);
};
