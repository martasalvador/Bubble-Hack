class Player {
	constructor(ctx, canvasSize, keys, physics) {
		this.ctx = ctx;
		this.keys = keys;
		this.physics = physics;
		this.canvasSize = canvasSize;

		this.playerSize = { h: 50, w: 50 };
		this.playerPos = { x: this.canvasSize.w - 800, y: this.canvasSize.h - this.playerSize.h - 100 };
		this.playerVel = { x: 0, y: 10 };

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
		this.bubble.forEach((b) => b.drawBubble());
	}

	shoot() {
		this.bubble.push(
			new Bubble(this.ctx, this.canvasSize, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
		);
	}

	setListeners() {
		document.onkeydown = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					this.playerVel.x -= 5;
					break;
				case this.keys.RIGHT:
					this.playerVel.x += 5;
					break;
				case this.keys.UP:
					this.playerVel.y -= 28;
					break;
				case this.keys.SPACE:
					this.shoot();
					break;
			}
		};
		document.onkeyup = (event) => {
			switch (event.key) {
				case this.keys.LEFT:
					this.playerVel.x = 0;
					break;
				case this.keys.RIGHT:
					this.playerVel.x = 0;
					break;
				case this.keys.UP:
					this.playerVel.y -= 0;
					break;
				case this.keys.SPACE:
					break;
			}
		};
	}

	movePlayer() {
		this.playerPos.y += this.playerVel.y;
		this.playerPos.x += this.playerVel.x;

		if (this.playerVel.x > 5) {
			this.playerVel.x = 5;
		} else if (this.playerVel.x < -5) {
			this.playerVel.x = -5;
		}

		if (this.playerPos.y + this.playerSize.h + this.playerVel.y <= this.canvasSize.h - 20 - this.physics.gravity) {
			this.playerVel.y += this.physics.gravity;
		} else {
			this.playerVel.y = 0;
		}
	}
}
