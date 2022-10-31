class Player {
	constructor(ctx, canvasSize, keys, physics) {
		this.ctx = ctx;
		this.keys = keys;
		this.physics = physics;
		this.canvasSize = canvasSize;

		this.playerSize = { h: 50, w: 50 };
		this.playerPos = { x: this.canvasSize.w - 830, y: this.canvasSize.h - this.playerSize.h - 100 };
		this.playerVel = { x: 0, y: 1 };

		this.floor = this.canvasSize.h - this.playerSize.h - 20;
		this.bubble = [];
		this.bubbledEnemy = [];
		this.isFacingRight = true;
		this.isPressed = {
			right: false,
			left: false,
			up: false,
		};
	}
	drawPlayer() {
		this.bubble.forEach((b) => b.drawBubble());

		this.ctx.fillStyle = "white";
		this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);
		this.movePlayer();
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
		if (this.bubble.length > 5) {
			this.bubble.shift();
		}
	}

	setListeners() {
		document.onkeydown = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					while (this.playerVel.x >= -3) {
						this.playerVel.x -= 1;
					}
					this.isFacingRight = false;
					break;
				case this.keys.RIGHT:
					while (this.playerVel.x <= 3) {
						this.playerVel.x += 1;
					}
					this.isFacingRight = true;
					break;
				case this.keys.UP:
					if (this.playerVel.y > -35) {
						this.playerVel.y -= 25;
					}
					break;
				case this.keys.SPACE:
					this.shoot();
					break;
			}
		};
		document.onkeyup = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					while (this.playerVel.x < 0) {
						this.playerVel.x += 0.5;
					}
					break;
				case this.keys.RIGHT:
					while (this.playerVel.x > 0) {
						this.playerVel.x -= 0.5;
					}
					break;
				case this.keys.UP:
					break;
				case this.keys.SPACE:
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
