const toggleSwitch = document.querySelector("input[type='checkbox");
var $ = function (id) {
	return document.getElementById(id);
};
const nav = $("nav");
const toggleIcon = $("toggle-icon");
const image1 = $("image1");
const image2 = $("image2");
const image3 = $("image3");
const textBox = $("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";
// Dark or Light images
function imageMode(color) {
	image1.src = `img/undraw_proud_coder_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
function toggleDarkLightMode(isDark) {
	nav.style.backgroundColor =
		isDark === DARK_THEME ? "rgb(0 0 0 /50%)" : "rgb(255 255 255 /50%)";
	textBox.style.backgroundColor =
		isDark === DARK_THEME ? "rgb(255 255 255 /50%)" : "rgb(0 0 0 /50%)";
	toggleIcon.children[0].textContent =
		isDark === DARK_THEME ? "Dark Mode" : "Light Mode";
	isDark === DARK_THEME
		? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
		: toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
	isDark === DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

//  Switch Theme
function switchTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", DARK_THEME);
		toggleDarkLightMode(DARK_THEME);
		localStorage.setItem("theme", DARK_THEME);
	} else {
		document.documentElement.setAttribute("data-theme", LIGHT_THEME);
		toggleDarkLightMode(LIGHT_THEME);
		localStorage.setItem("theme", LIGHT_THEME);
	}
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// get local storage theme and change
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
	if (currentTheme === DARK_THEME) {
		document.documentElement.setAttribute("data-theme", DARK_THEME);
		toggleDarkLightMode(DARK_THEME);
		toggleSwitch.checked = true;
	}
}
