const game = document.querySelector("canvas");
const logo = document.querySelector("div");
const startBtn = document.querySelector("button");

/* startBtn.onclick = () => {
	logo.classList.add("hidden");
	game.classList.remove("hidden");
	App.init();
}; */

window.onload = () => {
	App.init();
};
