const App = {
	appName: "BUBBLE HACK",
	version: "20.2.4",
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
		ENTER: "Enter",
	},
	physics: {
		gravity: 2,
		fruitsGravity: 0.5,
	},
	background: undefined,
	player: undefined,
	platforms: [],
	enemy: [],
	fruit: [],
	FPS: 60,
	lives: 3,
	time: 61,
	score: 1000,
	ghost: undefined,
	framesCounter: 0,
	isGame: true,

	enemySound: new Audio("./audio/ghost-ene.wav"),
	ghostSound: new Audio("./audio/ghost-ene.wav"),
	victorySound: new Audio("./audio/win.wav"),
	gameoverSound: new Audio("./audio/gameover.wav"),
	fruitSound: new Audio("./audio/fruit.wav"),

	init() {
		this.setContext();
		this.setDimensions();
		this.calculateTime();

		this.createPlayer();
		this.createEnemy();
		this.createGhost();

		this.createPlatforms();
		this.player.setListeners();

		this.start();
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
			this.framesCounter > 5000 ? (this.framesCounter = 0) : this.framesCounter++;

			this.clearAll();
			this.drawAll();
			this.playerPlatformCollision();
			this.bubbleEnemyCollision();
			this.checkBubblePlatformCollision();
			this.bubblePlatformCollision();
			this.playerFruitCollision();
			this.fruitPlatformCollision();
			this.playerBubbleCollision();
			this.ghostPlayerCollision();
			this.deleteOldBubbles();
			this.isVictory();
			this.isGameOver();
		}, 1000 / this.FPS);
	},
	clearAll() {
		this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
	},
	drawAll() {
		this.background = new Background(this.ctx, this.canvasSize);
		this.background.createBackground();

		this.calculateLives();

		this.drawTime(`${this.time}`);
		this.drawLives(`${this.lives} ❤︎`);
		this.drawScore();

		this.platforms.forEach((p) => p.drawPlatform());

		this.enemy.forEach((e) => e.drawEnemy(this.framesCounter));
		this.fruit.forEach((f) => {
			f.drawFruit(this.framesCounter);
		});
		this.player.drawPlayer(this.framesCounter);
		this.ghost.drawGhost(this.player.playerPos, this.framesCounter);
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
			new Enemy(this.ctx, this.canvasSize, 500, 160),
			new Enemy(this.ctx, this.canvasSize, 375, 310),
			new Enemy(this.ctx, this.canvasSize, 250, 460)
		);
	},

	createGhost() {
		this.ghost = new Ghost(this.ctx, this.canvasSize, this.player.playerPos.x, this.player.playerPos.y);
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
					e.enemyPos.x <= b.bubblePos.x + b.bubbleSize.w &&
					e.enemyPos.x + e.enemySize.w >= b.bubblePos.x &&
					e.enemyPos.y <= b.bubblePos.y &&
					e.enemyPos.y + e.enemySize.h >= b.bubblePos.y
				) {
					let enemyToDelete = this.enemy.indexOf(e);
					this.enemy.splice(enemyToDelete, 1);
					this.score += 100;
					b.image.src = "./images/bubbledEnemy.png";
					b.hasEnemy = true;
					b.bubbleSize.w = 60;
					b.bubbleSize.h = 60;
					b.bubblePos.y -= 20;
				}
			});
		});
	},

	deleteOldBubbles() {
		this.player.bubble.forEach((b) => {
			if (!b.hasEnemy && performance.now() - b.timeShot > 7000) {
				let bubbleToDelete = this.player.bubble.indexOf(b);
				this.player.bubble.splice(bubbleToDelete, 1);
			}
		});
	},

	playerFruitCollision() {
		this.fruit.forEach((f) => {
			if (
				this.player.playerPos.x <= f.fruitPos.x + f.fruitSize.w &&
				this.player.playerPos.x + this.player.playerSize.w >= f.fruitPos.x &&
				this.player.playerPos.y <= f.fruitPos.y &&
				this.player.playerPos.y + this.player.playerSize.h >= f.fruitPos.y
			) {
				let fruitToDelete = this.fruit.indexOf(f);
				this.fruit.splice(fruitToDelete, 1);
				this.score += 100;
				this.fruitSound.play();
			}
		});
	},

	bubblePlatformCollision() {
		this.player.bubble.forEach((b) => {
			this.platforms.forEach((p) => {
				if (
					// Chequea si colisionar con una plataforma
					p.platformPos.x < b.bubblePos.x + b.bubbleSize.w &&
					p.platformPos.x + p.platformSize.w > b.bubblePos.x - b.bubbleSize.w &&
					p.platformPos.y < b.bubblePos.y + b.bubbleSize.h &&
					p.platformPos.y + p.platformSize.h > b.bubblePos.y - b.bubbleSize.h
				) {
					// Cuando colisiones por ..., haz esto
					//// Izquierda
					if (p.platformPos.x < b.bubblePos.x + b.bubbleSize.w) {
						b.bubbleVel.y += 2;
						b.bubbleVel.x = 0;
					}
					//// Derecha
					if (p.platformPos.x + p.platformSize.w > b.bubblePos.x - b.bubbleSize.w) {
						b.bubbleVel.y += 2;
						b.bubbleVel.x = 0;
					}
					//// Abajo
					////// Check if facing right
					if (b.isBubbleFacingRight === true) {
						if (p.platformPos.y + p.platformSize.h > b.bubblePos.y - b.bubbleSize.h) {
							b.bubbleVel.y = 0;
							b.bubbleVel.x += 1.4;
							b.bubblePos.x += b.bubbleVel.x;
						}
					} else if (b.isBubbleFacingRight === false) {
						////// Check if facing left
						if (p.platformPos.y + p.platformSize.h > b.bubblePos.y - b.bubbleSize.h) {
							b.bubbleVel.y = 0;
							b.bubbleVel.x -= 1.4;
							b.bubblePos.x += b.bubbleVel.x;
						}
					}
				}
			});
		});
	},

	checkBubblePlatformCollision() {
		this.player.bubble.forEach((b) => {
			if (!this.bubblePlatformCollision()) {
				b.bubbleVel.y += 0.02;
			}
		});
	},

	fruitPlatformCollision() {
		this.fruit.forEach((f) => {
			this.platforms.forEach((p) => {
				if (
					p.platformPos.x < f.fruitPos.x + f.fruitSize.w &&
					p.platformPos.x + p.platformSize.w > f.fruitPos.x - f.fruitSize.w &&
					p.platformPos.y < f.fruitPos.y + f.fruitSize.h &&
					p.platformPos.y + p.platformSize.h > f.fruitPos.y - f.fruitSize.h
				) {
					f.fruitPos.y = p.platformPos.y - f.fruitSize.h;
					if (f.fruitVel.y > 0) {
						f.fruitVel.y = 0;
					}
				}
			});
		});
	},

	playerBubbleCollision() {
		this.player.bubble.forEach((b) => {
			if (
				this.player.playerPos.x <= b.bubblePos.x + b.bubbleSize.w &&
				this.player.playerPos.x + this.player.playerSize.w >= b.bubblePos.x + b.bubbleSize.w &&
				this.player.playerPos.y <= b.bubblePos.y + b.bubbleSize.h &&
				this.player.playerPos.y + this.player.playerSize.h >= b.bubblePos.y - b.bubbleSize.h
			) {
				if (b.hasEnemy === true) {
					let bubbleToDelete = this.player.bubble.indexOf(b);
					this.player.bubble.splice(bubbleToDelete, 1);
					console.log("índice", bubbleToDelete);
					this.fruit.push(new Fruit(this.ctx, this.canvasSize, this.physics));
					this.playerPos.y -= 50;
				}
				if (this.player.playerPos.y + this.player.playerSize.h >= b.bubblePos.y - b.bubbleSize.h) {
					this.player.playerVel.y = b.bubbleVel.y;
					this.player.playerPos.y = b.bubblePos.y - this.player.playerSize.h;
				}
			}
		});
	},

	ghostPlayerCollision() {
		if (
			this.player.playerPos.x <= this.ghost.ghostPos.x + this.ghost.ghostSize.w &&
			this.player.playerPos.x + this.player.playerSize.w >= this.ghost.ghostPos.x &&
			this.player.playerPos.y <= this.ghost.ghostPos.y &&
			this.player.playerPos.y + this.player.playerSize.h >= this.ghost.ghostPos.y
		) {
			if (this.lives > 0) {
				if (this.score > 0) {
					this.score -= 100;
				}
			}
			this.ghostSound.play();
			this.player.playerPos.x = -1900;
			this.player.playerPos.y = 1200;
			this.ghost.ghostPos.x = 920;
			this.ghost.ghostPos.y = -85;

			setTimeout(() => {
				this.player.playerPos.x = this.canvasSize.w - 800;
				this.player.image.frameIndex = 0;
				this.player.playerPos.y = this.canvasSize.h - this.player.playerSize.h - 100;
				this.player.playerColor = "white";
			}, 500);
		}
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
					this.enemySound.play();
					this.lives--;
					this.player.playerColor = "#1f001b";
					this.player.playerPos.x = -1900;
					this.player.playerPos.y = 1200;
					this.ghost.ghostPos.x = 920;
					this.ghost.ghostPos.y = -85;
					setTimeout(() => {
						this.player.playerPos.x = this.canvasSize.w - 800;
						this.player.playerPos.y = this.canvasSize.h - this.player.playerSize.h - 100;
						this.player.playerColor = "white";
					}, 500);
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
			if (this.time > 0) {
				this.time--;
				if (this.ghost.ghostVel.x < 2 || this.ghost.ghostVel.y < 2) {
					this.ghost.ghostVel.x += 0.05;
					this.ghost.ghostVel.y += 0.05;
				}
			}
		}, 1000);
	},

	drawTime(text) {
		this.ctx.fillStyle = "white";
		this.ctx.font = "25px monospace";
		this.ctx.fillText(text, 790, 60);
	},

	drawGameOver() {
		this.ctx.textAlign = "center";
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);

		this.ctx.fillStyle = "white";
		this.ctx.beginPath();
		this.ctx.font = "70px monospace";
		this.ctx.fillText("GAME OVER", this.canvasSize.w / 2, 250);
		this.ctx.closePath();

		this.ctx.fillStyle = "#FF00FF";
		this.ctx.beginPath();
		this.ctx.font = "40px monospace";
		if (this.score === 0) {
			this.ctx.fillText(`You suck! :)`, this.canvasSize.w / 2, 400);
		} else {
			this.ctx.fillText(`Your score is: ${this.score}`, this.canvasSize.w / 2, 400);
		}
		this.ctx.closePath();

		this.ctx.fillStyle = "white";
		this.ctx.beginPath();
		this.ctx.font = "30px monospace";
		this.ctx.fillText("PRESS BACKSPACE TO RESTART", this.canvasSize.w / 2, 550);
		this.ctx.closePath();
	},

	isGameOver() {
		if (this.lives <= 0 || this.time <= 0 || this.score <= 0) {
			this.clearAll();
			this.drawGameOver();
			this.ghost.ghostVel.x = -10000;
			this.ghost.ghostVel.y = -10000;
			document.querySelector("audio").pause();
		}
	},

	drawScore() {
		this.ctx.fillStyle = "white";
		this.ctx.font = "25px monospace";
		this.ctx.fillText(this.score, this.canvasSize.w / 2 - 30, 60);
	},

	drawVictory() {
		this.ctx.textAlign = "center";
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);

		this.ctx.fillStyle = "white";
		this.ctx.beginPath();
		this.ctx.font = "70px monospace";
		this.ctx.fillText("VICTORY!!", this.canvasSize.w / 2, 250);
		this.ctx.closePath();

		this.ctx.fillStyle = "#FF00FF";
		this.ctx.beginPath();
		this.ctx.font = "40px monospace";
		this.ctx.fillText(`Your score is: ${this.score}`, this.canvasSize.w / 2, 370);
		this.ctx.closePath();

		this.ctx.fillStyle = "white";
		this.ctx.beginPath();
		this.ctx.font = "30px monospace";
		this.ctx.fillText("PRESS BACKSPACE TO RESTART", this.canvasSize.w / 2, 500);
		this.ctx.closePath();
	},
	isVictory() {
		if (this.enemy.length === 0 && this.fruit.length === 0 && this.player.bubble.length === 0) {
			this.isGame = false;

			this.clearAll();

			this.drawVictory();

			this.ghost.ghostVel.x = -10000;
			this.ghost.ghostVel.y = -10000;

			document.querySelector("audio").pause();
		}
	},
};
