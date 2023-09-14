let gridCardButton = document.querySelector('.card-view-button-grid');
let listCardButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

listCardButton.onclick = function () {
	gridCardButton.classList.remove('active');
	listCardButton.classList.add('active');
	cardsList.classList.add('list');
};

gridCardButton.onclick = function () {
	gridCardButton.classList.add('active');
	listCardButton.classList.remove('active');
	cardsList.classList.remove('list');
};