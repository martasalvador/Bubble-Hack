const game = document.querySelector("canvas");
const intro = document.querySelector(".intro");
const startBtn = document.querySelector("button");
const audio = document.querySelector("audio");

const greenDragon = document.querySelector(".green");
const blueDragon = document.querySelector(".blue");

const marta = document.querySelector(".marta");
const manu = document.querySelector(".manu");

audio.volume = 0.05;

document.addEventListener("keyup", (e) => {
	if (e.key === "Backspace") {
		window.location.reload();
	}
});

startBtn.onclick = () => {
	intro.classList.add("div-out");
	setTimeout(() => {
		intro.classList.add("hidden");
	}, 3000);
	game.classList.remove("hidden");
	marta.classList.remove("hidden");
	manu.classList.remove("hidden");

	App.init();
};

if (!App.isGame) {
	greenDragon.classList.remove("hidden");
	blueDragon.classList.remove("hidden");
}

/* window.onload = () => {
	App.init();
}; */
