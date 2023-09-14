let shortBlocks = document.querySelectorAll('.blog-article.short');

for (let shortBlock of shortBlocks) {
	let moreButton = shortBlock.querySelector('.more');
	moreButton.onclick = function () {
		shortBlock.classList.remove('short');
	};
}