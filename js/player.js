class Player {
	constructor(ctx, canvasSize, keys, physics) {
		this.ctx = ctx;
		this.keys = keys;
		this.physics = physics;
		this.canvasSize = canvasSize;

		this.playerSize = { h: 70, w: 70 };
		this.playerPos = { x: this.canvasSize.w - 830, y: this.canvasSize.h - this.playerSize.h - 100 };
		this.playerVel = { x: 0, y: 1 };

		this.floor = this.canvasSize.h - this.playerSize.h - 20;
		this.bubble = [];
		this.isFacingRight = true;
		this.playerColor = "white";

		this.image = new Image();
		this.image.src = "./images/player-right.png";
		this.image.frames = 5;
		this.image.frameIndex = 0;
		this.isPressed = {
			right: false,
			left: false,
			up: false,
			space: false,
		};
	}

	drawPlayer(framesCounter) {
		this.bubble.forEach((b) => b.drawBubble(framesCounter));

		/* this.ctx.fillStyle = this.playerColor;
		this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h); */

		this.ctx.drawImage(
			this.image,
			this.image.frameIndex * (this.image.width / this.image.frames),
			0,
			this.image.width / this.image.frames - 41,
			this.image.height - 41,
			this.playerPos.x,
			this.playerPos.y,
			this.playerSize.w,
			this.playerSize.h
		);
		this.animatePlayer(framesCounter);

		this.movePlayer();
	}

	animatePlayer(framesCounter) {
		if (
			this.isPressed.right === false &&
			this.isPressed.left === false &&
			this.isPressed.up === false &&
			this.isPressed.space === false
		) {
			this.image.frameIndex = 5;
		}
		if (this.isPressed.space === true) {
			this.image.frameIndex = 4;
		}
		if (framesCounter % 10 == 0) {
			this.image.frameIndex++;
		}
		if (this.image.frameIndex >= this.image.frames) {
			this.image.frameIndex = 0;
		}
	}

	shoot() {
		let startingPos = this.playerPos.x;
		if (!this.isFacingRight) {
			startingPos = this.playerPos.x - 80;
		}
		this.bubble.push(
			new Bubble(
				this.ctx,
				this.canvasSize,
				/* this.playerPos.x - 15, */
				startingPos,
				this.playerPos.y - 15,
				this.playerSize.w,
				this.playerSize.h,
				this.isFacingRight
			)
		);
		if (this.bubble.length > 7) {
			this.bubble.shift();
		}
	}

	setListeners() {
		let jumpSound = new Audio("./audio/jump.wav");
		let shootSound = new Audio("./audio/bubble.wav");

		document.onkeydown = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					this.isFacingRight = false;
					while (this.playerVel.x >= -3) {
						this.playerVel.x -= 1;
						this.isPressed.left = true;
					}

					break;
				case this.keys.RIGHT:
					this.isFacingRight = true;
					this.isPressed.right = true;
					while (this.playerVel.x <= 3) {
						this.playerVel.x += 1;
					}

					break;
				case this.keys.UP:
					this.isPressed.up = true;
					if (this.playerVel.y === 0) {
						if (this.playerVel.y > -35) {
							this.playerVel.y -= 25;
						}
					}
					jumpSound.play();
					break;
				case this.keys.SPACE:
					event.preventDefault();
					this.shoot();
					this.isPressed.space = true;
					shootSound.play();
					break;
			}
		};
		document.onkeyup = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					this.isPressed.left = false;
					while (this.playerVel.x < 0) {
						this.playerVel.x += 0.5;
					}
					break;
				case this.keys.RIGHT:
					this.isPressed.right = false;
					while (this.playerVel.x > 0) {
						this.playerVel.x -= 0.5;
					}
					break;
				case this.keys.UP:
					this.isPressed.up = false;
					break;
				case this.keys.SPACE:
					event.preventDefault();
					this.isPressed.space = false;
					break;
			}
		};
	}

	movePlayer() {
		this.isFacingRight ? this.image : (this.image.src = "./images/player-left.png");
		!this.isFacingRight ? this.image : (this.image.src = "./images/player-right.png");
		// Check if player can go above the ceiling
		if (this.playerPos.y < 20) {
			this.playerPos.y = 20;
			this.playerVel.y = 0;
		}
		this.playerPos.y += this.playerVel.y;

		if (this.playerPos.x + this.playerSize.w > this.canvasSize.w - 20) {
			// Check if player can go further than canvas size
			this.playerPos.x = this.canvasSize.w - this.playerSize.w - 20;
			this.playerVel.x = 0;
		} else if (this.playerPos.x < 20) {
			// Check if player can go further than x=0
			this.playerPos.x = 20;
			this.playerVel.x = 0;
		}
		this.playerPos.x += this.playerVel.x;

		// Gravity
		if (this.playerPos.y + this.playerSize.h + this.playerVel.y <= this.canvasSize.h - 20 - this.physics.gravity) {
			this.playerVel.y += this.physics.gravity;
		} else {
			this.playerVel.y = 0;
		}
	}
}
