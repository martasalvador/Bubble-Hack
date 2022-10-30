class Bubble {
	constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.bubblePos = { x: playerPosX + playerWidth, y: playerPosY + playerHeight / 2 };
		this.bubbleVel = { x: 10, y: 10 };
		this.bubbleRadius = 15;
		this.maxDistance = this.bubblePos.x + 250;
	}

	drawBubble() {
		this.ctx.beginPath();
		this.ctx.fillStyle = "lightblue";
		this.ctx.arc(this.bubblePos.x, this.bubblePos.y, this.bubbleRadius, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.closePath();

		this.moveBubble();
	}
	moveBubble() {
		if (this.bubblePos.x === this.maxDistance) {
			this.bubbleVel.x = 0;
			if (this.bubblePos.y > this.canvasSize.h - 550) {
				this.bubblePos.y -= this.bubbleVel.y;
			} else {
				this.bubblePos.y = 100;
			}
		}
		this.bubblePos.x += this.bubbleVel.x;
	}
}
