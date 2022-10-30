class Player {
	constructor(ctx, canvasSize, keys, physics) {
		this.ctx = ctx;
		this.keys = keys;
		this.physics = physics;
		this.canvasSize = canvasSize;

		this.playerSize = { h: 50, w: 50 };
		this.playerPos = { x: this.canvasSize.w - 800, y: this.canvasSize.h - this.playerSize.h - 100 };
		this.playerVel = { x: 10, y: 0 };

		this.floor = this.canvasSize.h - this.playerSize.h - 20;
		this.isPressed = {
			left: false,
			right: false,
		};
		this.bubble = [];
	}
	drawPlayer() {
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);
		this.setGravity();
		this.bubble.forEach((b) => b.drawBubble());
		/* if (this.isPressed.left) {
			this.moveLeft();
		}
		if (this.isPressed.right) {
			this.moveRight();
		} else {
			this.playerVel.x = 0;
		} */
	}
	jump() {
		if (this.playerPos.y <= 20) {
			this.playerPos.y += 20;
			this.playerVel.y = 0;
		} else if (this.playerPos.y - this.playerSize.h > 20) {
			this.playerVel.y -= 27;
		}
	}
	moveRight() {
		if (this.playerPos.x + this.playerSize.h < this.canvasSize.w - 20) {
			this.playerPos.x += 10;
		}

		/* if (this.playerPos.x + this.playerSize.h < this.canvasSize.w - 20) {
			this.playerPos.x += this.playerVel.x;
		} */
	}
	moveLeft() {
		if (this.playerPos.x > 20) {
			this.playerPos.x -= 10;
		}

		/* if (this.playerPos.x > 20) {
			this.playerPos.x -= this.playerVel.x;
		} */
	}

	shoot() {
		this.bubble.push(
			new Bubble(this.ctx, this.canvasSize, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
		);
	}

	setListeners() {
		document.addEventListener("keydown", (e) => {
			switch (e.key) {
				case this.keys.RIGHT:
					this.moveRight();
					break;
				case this.keys.LEFT:
					this.moveLeft();
					break;
				case this.keys.UP:
					this.jump();
					break;
				case this.keys.SPACE:
					this.shoot();
					break;
			}
		});
		/* document.addEventListener("keydown", (e) => {
			switch (e.key) {
				case this.keys.RIGHT:
					this.isPressed.right = true;
					// this.moveRight();
					break;
				case this.keys.LEFT:
					this.isPressed.left = true;
					// this.moveLeft();
					break;
				case this.keys.UP:
					this.jump();
					break;
			}
		});
		document.addEventListener("keyup", (e) => {
			switch (e.key) {
				case this.keys.RIGHT:
					this.isPressed.right = false;
					break;
				case this.keys.LEFT:
					this.isPressed.right = false;
					break;
				case this.keys.UP:
					this.jump();
					break;
			}
		}); */
	}
	setGravity() {
		this.playerPos.y += this.playerVel.y;
		if (this.playerPos.y + this.playerVel.y < this.floor) {
			this.playerVel.y += this.physics.gravity;
			/* this.playerPos.y = this.playerPos.y + this.playerSize.h; */
		} else {
			this.playerPos.y = this.floor;
			this.playerVel.y = 0;
		}
	}
}
