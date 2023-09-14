let lightThemeButton = document.querySelector('.theme-button-light');
let darkThemeButton = document.querySelector('.theme-button-dark');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');
let page = document.body;

darkThemeButton.onclick = function () {
	darkThemeButton.classList.add('active');
	lightThemeButton.classList.remove('active');
	page.classList.add('dark');
};

lightThemeButton.onclick = function () {
	darkThemeButton.classList.remove('active');
	lightThemeButton.classList.add('active');
	page.classList.remove('dark');
};

serifButton.onclick = function () {
	serifButton.classList.add('active');
	sansSerifButton.classList.remove('active');
	page.classList.add('serif');
};

sansSerifButton.onclick = function () {
	sansSerifButton.classList.add('active');
	serifButton.classList.remove('active');
	page.classList.remove('serif');
};