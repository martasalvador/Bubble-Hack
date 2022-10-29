class Player {
	constructor(ctx, canvasSize, keys, physics) {
		this.ctx = ctx;
		this.keys = keys;
		this.physics = physics;
		this.canvasSize = canvasSize;

		this.playerSize = { h: 50, w: 50 };
		this.playerPos = { x: this.canvasSize.w - 800, y: this.canvasSize.h - this.playerSize.h - 100 };
		this.playerVel = { x: 10, y: 1 };

		this.floor = this.canvasSize.h - this.playerSize.h - 20;
		this.setListeners();
		this.isPressed = {
			left: false,
			right: false,
		};
	}
	drawPlayer() {
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);
		this.setGravity();
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
		if (this.playerPos.y - this.playerSize.h > 20) {
			this.playerPos.y -= 55;
			this.playerVel.y -= 10;
		} else if ((this.playerPos.y = 20)) {
			this.playerPos.y += 20;
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
		if (this.playerPos.y + this.playerSize.h < this.floor) {
			this.playerPos.y += this.playerVel.y;
			this.playerVel.y += this.physics.gravity;
		} else {
			this.playerPos.y = this.floor;
			this.playerVel.y = 1;
		}
	}
}
