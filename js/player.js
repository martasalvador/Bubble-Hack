class Player {
	constructor(ctx, canvasSize, keys, physics) {
		this.ctx = ctx;
		this.keys = keys;
		this.physics = physics;
		this.canvasSize = canvasSize;

		this.playerSize = { h: 60, w: 60 };
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
		this.bubble.forEach((b) => b.drawBubble());

		/* this.isFacingRight ? this.image : (this.image.src = "./images/player-left.png") */

		/* this.ctx.fillStyle = this.playerColor;
		this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h); */

		this.ctx.drawImage(
			this.image,
			this.image.frameIndex * (this.image.width / this.image.frames),
			0,
			this.image.width / this.image.frames - 40,
			this.image.height - 40,
			this.playerPos.x,
			this.playerPos.y,
			this.playerSize.w,
			this.playerSize.h
		);
		this.animatePlayer(framesCounter);

		this.movePlayer();
	}

	animatePlayer(framesCounter) {
		if (framesCounter % 5 == 0) {
			this.image.frameIndex++;
		}
		if (this.image.frameIndex >= this.image.frames - 2) {
			this.image.frameIndex = 0;
		}
	}

	shoot() {
		this.bubble.push(
			new Bubble(
				this.ctx,
				this.canvasSize,
				this.playerPos.x,
				this.playerPos.y,
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
		document.onkeydown = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					while (this.playerVel.x >= -3) {
						this.playerVel.x -= 1;
						this.isPressed.left = true;
					}
					this.isFacingRight = false;
					break;
				case this.keys.RIGHT:
					while (this.playerVel.x <= 3) {
						this.playerVel.x += 1;
					}
					this.isFacingRight = true;
					this.isPressed.right = true;
					break;
				case this.keys.UP:
					if (this.playerVel.y === 0) {
						if (this.playerVel.y > -35) {
							this.playerVel.y -= 25;
						}
					}
					this.isPressed.up = true;
					break;
				case this.keys.SPACE:
					this.shoot();
					this.isPressed.space = true;
					break;
			}
		};
		document.onkeyup = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					while (this.playerVel.x < 0) {
						this.playerVel.x += 0.5;
						this.isPressed.left = false;
					}
					break;
				case this.keys.RIGHT:
					while (this.playerVel.x > 0) {
						this.playerVel.x -= 0.5;
					}
					this.isPressed.right = false;
					break;
				case this.keys.UP:
					this.isPressed.up = false;
					break;
				case this.keys.SPACE:
					this.isPressed.space = false;
					break;
			}
		};
	}

	movePlayer() {
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
