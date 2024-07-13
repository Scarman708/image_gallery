document.addEventListener('DOMContentLoaded', function() {
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.getElementById('lightbox-img');
	const captionText = document.getElementById('caption');
	const closeBtn = document.getElementsByClassName('close')[0];

	document.querySelectorAll('.img_item a').forEach(item => {
		item.addEventListener('click', function(event) {
			event.preventDefault();
			lightbox.style.display = 'block';
			lightboxImg.src = this.href;
			captionText.innerHTML = this.querySelector('p').innerText;
		});
	});

	closeBtn.addEventListener('click', function() {
		lightbox.style.display = 'none';
	});

	lightbox.addEventListener('click', function(event) {
		if (event.target === lightbox) {
			lightbox.style.display = 'none';
		}
	});
});
