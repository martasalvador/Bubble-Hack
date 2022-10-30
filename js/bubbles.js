class Bubble {
	constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight, isLookingRight) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.bubblePos = { x: playerPosX + playerWidth / 2, y: playerPosY + playerHeight / 2 };
		this.bubbleVel = { x: 10, y: 10 };
		this.bubbleRadius = 15;
		this.maxDistanceRight = this.bubblePos.x + 250;
		this.maxDistanceLeft = this.bubblePos.x - 250;
		this.bubbleColor = "lightblue";
		this.isLookingRight = isLookingRight;
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
		if (this.isLookingRight) {
			if (this.bubblePos.x === this.maxDistanceRight) {
				this.bubbleVel.x = 0;
				if (this.bubblePos.y > this.canvasSize.h - 600) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 100;
				}
			}
			this.bubblePos.x += this.bubbleVel.x;
		} else {
			if (this.bubblePos.x === this.maxDistanceLeft) {
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
