class Bubble {
	constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight, isFacingRight) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.bubblePos = { x: playerPosX + playerWidth / 2, y: playerPosY + playerHeight / 2 };
		this.bubbleVel = { x: 4, y: 1 };
		this.bubbleRadius = 15;
		this.maxDistanceRight = this.bubblePos.x + 250;
		this.maxDistanceLeft = this.bubblePos.x - 250;
		this.bubbleColor = "lightblue";
		this.isFacingRight = isFacingRight;
		this.isBubbleFacingRight = true;
	}

	drawBubble() {
		this.ctx.beginPath();
		this.ctx.fillStyle = this.bubbleColor;
		this.ctx.arc(this.bubblePos.x, this.bubblePos.y, this.bubbleRadius, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.closePath();

		this.moveBubble();
	}
	moveBubble() {
		// Dispara hacia la derecha
		if (this.isFacingRight) {
			this.isBubbleFacingRight = true;
			if (this.maxDistanceRight > this.canvasSize.w - 30) {
				if (this.bubblePos.x + this.bubbleRadius < this.canvasSize.w - 30) {
					this.bubblePos.x += this.bubbleVel.x;
					this.bubbleVel.y = 0;
				} else {
					this.bubbleVel.x = 0;
					this.bubbleVel.y = 3;
				}
				if (this.bubblePos.y > this.canvasSize.h - 600) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 100;
				}
			}
			if (this.bubblePos.x > this.maxDistanceRight) {
				this.bubbleVel.x = 0;
				if (this.bubblePos.y > this.canvasSize.h - 600) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 100;
				}
			}
			this.bubblePos.x += this.bubbleVel.x;
		}
		// Dispara hacia la izquierda
		else {
			this.isBubbleFacingRight = false;
			if (this.maxDistanceLeft < 30) {
				if (this.bubblePos.x - this.bubbleRadius > 30) {
					this.bubblePos.x -= this.bubbleVel.x;
					this.bubbleVel.y = 0;
				} else {
					this.bubbleVel.x = 0;
					this.bubbleVel.y = 3;
				}
				if (this.bubblePos.y > this.canvasSize.h - 600) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 100;
				}
			}

			if (this.bubblePos.x - this.bubbleRadius < this.maxDistanceLeft) {
				this.bubbleVel.x = 0;
				if (this.bubblePos.y > this.canvasSize.h - 600) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 100;
				}
			}
			this.bubblePos.x -= this.bubbleVel.x;
		}
	}
}
