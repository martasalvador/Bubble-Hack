const App = {
	appName: "IRON BUBBLE",
	version: "1.0.0",
	license: undefined,
	author: "Marta Salvador y Manuel Atance",
	description: "Mi primerito juego",
	ctx: undefined,
	canvasSize: { w: 900, h: 700 },
	keys: {
		UP: "ArrowUp",
		RIGHT: "ArrowRight",
		LEFT: "ArrowLeft",
		SPACE: " ",
	},
	physics: {
		gravity: 2.5,
	},
	background: undefined,
	player: undefined,
	platforms: [],
	enemy: [],
	FPS: 60,
	lives: 3,
	time: 2000,
	score: 1000,

	init() {
		this.setContext();
		this.setDimensions();
		this.createPlayer();
		this.createEnemy();

		this.createPlatforms();
		this.player.setListeners();

		this.start();
		this.calculateTime();
	},
	setContext() {
		this.ctx = document.querySelector("#canvas").getContext("2d");
	},
	setDimensions() {
		document.querySelector("#canvas").setAttribute("height", this.canvasSize.h);
		document.querySelector("#canvas").setAttribute("width", this.canvasSize.w);
	},
	start() {
		setInterval(() => {
			this.calculateScore();
			this.clearAll();
			this.drawAll();
			this.playerPlatformCollision();
			this.bubbleEnemyCollision();

			this.isGameOver();
		}, 1000 / this.FPS);
	},
	clearAll() {
		this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
		this.enemy = this.enemy.filter((e) => e.enemyPos.x < this.canvasSize.w);
	},
	drawAll() {
		this.background = new Background(this.ctx, this.canvasSize);
		this.background.createBackground();

		this.calculateLives();

		this.drawTime(`${this.time}`);
		this.drawLives(`${this.lives} ❤︎`);
		this.drawScore();

		this.platforms.forEach((p) => p.drawPlatform());

		this.enemy.forEach((e) => e.drawEnemy());

		this.player.drawPlayer();
	},
	createPlayer() {
		this.player = new Player(this.ctx, this.canvasSize, this.keys, this.physics);
	},
	createPlatforms() {
		this.platforms.push(
			new Platform(this.ctx, this.canvasSize, 200, 220),
			new Platform(this.ctx, this.canvasSize, 200, 370),
			new Platform(this.ctx, this.canvasSize, 200, 520)
		);
	},
	createEnemy() {
		this.enemy.push(
			new Enemy(this.ctx, this.canvasSize, 500, 180),
			new Enemy(this.ctx, this.canvasSize, 400, 330),
			new Enemy(this.ctx, this.canvasSize, 300, 480)
		);
	},

	playerPlatformCollision() {
		this.platforms.forEach((p) => {
			if (
				this.player.playerPos.x <= p.platformPos.x + p.platformSize.w &&
				this.player.playerPos.x + this.player.playerSize.w >= p.platformPos.x &&
				this.player.playerPos.y + 40 /* ¿? */ <= p.platformPos.y &&
				this.player.playerPos.y + this.player.playerSize.h >= p.platformPos.y
			) {
				this.player.playerPos.y = p.platformPos.y - this.player.playerSize.h;
				if (this.player.playerVel.y > 0) {
					this.player.playerVel.y = 0;
				}
			} else {
			}
		});
	},

	bubbleEnemyCollision() {
		this.player.bubble.forEach((b) => {
			this.enemy.forEach((e) => {
				if (
					e.enemyPos.x <= b.bubblePos.x + b.bubbleRadius &&
					e.enemyPos.x + e.enemySize.w >= b.bubblePos.x &&
					e.enemyPos.y <= b.bubblePos.y &&
					e.enemyPos.y + e.enemySize.h >= b.bubblePos.y
				) {
					e.enemyPos.x = 10000;
					b.bubbleColor = "peachpuff";
				}
			});
		});
	},

	calculateLives() {
		this.enemy.forEach((e) => {
			if (
				this.player.playerPos.x < e.enemyPos.x + e.enemySize.w &&
				this.player.playerPos.x + this.player.playerSize.w > e.enemyPos.x &&
				this.player.playerPos.y < e.enemyPos.y &&
				this.player.playerPos.y + this.player.playerSize.h > e.enemyPos.y
			) {
				if (this.lives > 0) {
					this.lives--;
					this.player.playerPos.x = this.canvasSize.w - 800;
					this.player.playerPos.y = this.canvasSize.h - this.player.playerSize.h - 100;
				} else {
					this.lives = 0;
				}
			}
		});
	},
	drawLives(text) {
		this.ctx.fillStyle = "white";
		this.ctx.font = "25px monospace";
		this.ctx.fillText(text, 50, 60);
	},
	calculateTime() {
		setInterval(() => {
			if (this.time > 0) this.time--;
		}, 1000);
	},
	drawTime(text) {
		this.ctx.fillStyle = "white";
		this.ctx.font = "25px monospace";
		this.ctx.fillText(text, 790, 60);
	},
	drawGameOver() {
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);

		this.ctx.fillStyle = "white";
		this.ctx.beginPath();
		this.ctx.font = "70px monospace";
		this.ctx.fillText("GAME OVER", 250, 250);
		this.ctx.closePath();

		this.ctx.fillStyle = "#FF00FF";
		this.ctx.beginPath();
		this.ctx.font = "40px monospace";
		this.ctx.fillText(`Your score is: ${this.score}`, 220, 400);
		// Cambiar 400 por 370 cuando tengamos botón
		this.ctx.closePath();
	},

	isGameOver() {
		if (this.lives === 0 || this.time === 0) {
			this.clearAll();
			this.drawGameOver();
		}
	},

	drawScore() {
		this.ctx.fillStyle = "white";
		this.ctx.font = "25px monospace";
		this.ctx.fillText(this.score, this.canvasSize.w / 2 - 30, 60);
	},

	calculateScore() {
		this.enemy.forEach((e) => {
			if (e.enemyPos.x === 10000) {
				this.score += 100;
			}
		});
	},
};
