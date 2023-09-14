let smallPictures = document.querySelectorAll('.preview-list a');
let bigPicture = document.querySelector('.active-photo');

for (let smallPhoto of smallPictures) {
	smallPhoto.onclick = function (evt) {
		evt.preventDefault();
		let activeSmallPhoto = document.querySelector('.preview-list a.active-item');
		activeSmallPhoto.classList.remove('active-item');
		smallPhoto.classList.add('active-item');
		bigPicture.src = smallPhoto.href;
	};
}