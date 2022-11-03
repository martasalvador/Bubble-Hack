const game = document.querySelector("canvas");
const logo = document.querySelector("div");
const startBtn = document.querySelector("button");
const year = document.querySelector(".year");
/* const audio = document.querySelector("audio");

audio.volume = 0.1; */

startBtn.onclick = () => {
	logo.classList.add("div-out");
	setTimeout(() => {
		logo.classList.add("hidden");
	}, 3000);
	game.classList.remove("hidden");
	/* setTimeout(() => {
		App.init();
	}, 500); */
	App.init();
	year.classList.add("right");
};

/* window.onload = () => {
	App.init();
}; */
