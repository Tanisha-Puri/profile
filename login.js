function slideToSignup() {
	document.querySelector('.login').style.transform = 'translateX(-100%)';
	document.querySelector('.signup').style.transform = 'translateX(0%)';
}

function slideToLogin() {
	document.querySelector('.login').style.transform = 'translateX(0%)';
	document.querySelector('.signup').style.transform = 'translateX(100%)';
}