const containerObj = document.querySelector(".container");

const btnLogin = document.getElementById("btn-login");

const formPopupObj = document.querySelector(".form");

const btnClose = document.querySelector(".btn-close");

const showHidePassword = document.querySelector(".password > i");

const passwordObj = document.querySelector(`input[name="password"]`);

const signinFormObj = document.querySelector(".sign-in");
const signupFormObj = document.querySelector(".sign-up");

const signinBtn = document.getElementById("sign-in");
const signupBtn = document.getElementById("sign-up");

btnLogin.addEventListener("click", function () {
	containerObj.classList.remove("d-none");
	formPopupObj.classList.remove("d-none");
});

document.addEventListener("keyup", function (e) {
	console.log(e);
	if (e.key === "Escape") {
		containerObj.classList.add("d-none");
		formPopupObj.classList.add("d-none");
	}
});

containerObj.addEventListener("click", function () {
	containerObj.classList.add("d-none");
});

btnClose.addEventListener("click", function () {
	containerObj.classList.add("d-none");
	formPopupObj.classList.add("d-none");
});

showHidePassword.addEventListener("click", function () {
	if (passwordObj.type === "password") {
		passwordObj.type = "text";
		check = "text";
		showHidePassword.classList.remove("fa-eye");
		showHidePassword.classList.add("fa-eye-slash");
	} else {
		passwordObj.type = "password";
		showHidePassword.classList.remove("fa-eye-slash");
		showHidePassword.classList.add("fa-eye");
	}
});

signinBtn.addEventListener("click", function (e) {
	e.preventDefault();
	signinBtn.classList.add("active");
	signupBtn.classList.remove("active");
	signinFormObj.classList.remove("d-none");
	signupFormObj.classList.add("d-none");
});

signupBtn.addEventListener("click", function (e) {
	e.preventDefault();
	signupBtn.classList.add("active");
	signinBtn.classList.remove("active");
	signupFormObj.classList.remove("d-none");
	signinFormObj.classList.add("d-none");
});
