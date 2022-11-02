class Bubble {
	constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight, isFacingRight) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.bubblePos = { x: playerPosX + playerWidth / 2, y: playerPosY + playerHeight / 2 };
		this.bubbleVel = { x: 4, y: 1.25 };
		this.bubbleSize = { w: 40, h: 40 };
		this.maxDistanceRight = this.bubblePos.x + 250;
		this.maxDistanceLeft = this.bubblePos.x - 250;
		this.bubbleColor = "lightblue";
		this.isFacingRight = isFacingRight;
		this.isBubbleFacingRight = true;

		this.image = new Image();
		this.image.src = "./images/bubble.png";
		this.image.frames = 6;
		this.image.frameIndex = 0;
	}

	drawBubble(framesCounter) {
		this.ctx.drawImage(
			this.image,
			this.image.frameIndex * (this.image.width / this.image.frames),
			0,
			this.image.width / this.image.frames - 32,
			this.image.height - 30,
			this.bubblePos.x,
			this.bubblePos.y,
			this.bubbleSize.w,
			this.bubbleSize.h
		);

		/* this.ctx.beginPath();
		this.ctx.fillStyle = this.bubbleColor;
		this.ctx.arc(this.bubblePos.x, this.bubblePos.y, this.bubbleRadius, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.closePath(); */

		this.animateBubble(framesCounter);
		this.moveBubble();
	}
	moveBubble() {
		// Dispara hacia la derecha
		if (this.isFacingRight) {
			this.isBubbleFacingRight = true;
			if (this.maxDistanceRight > this.canvasSize.w - 30) {
				if (this.bubblePos.x + this.bubbleSize.w < this.canvasSize.w - 40) {
					this.bubblePos.x += this.bubbleVel.x;
					this.bubbleVel.y = 0;
				} else {
					this.bubbleVel.x = 0;
					this.bubbleVel.y = 3;
				}
				if (this.bubblePos.y > this.canvasSize.h - 550) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 150;
				}
			}
			if (this.bubblePos.x > this.maxDistanceRight) {
				this.bubbleVel.x = 0;
				if (this.bubblePos.y > this.canvasSize.h - 550) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 150;
				}
			}
			this.bubblePos.x += this.bubbleVel.x;
		}
		// Dispara hacia la izquierda
		else {
			this.isBubbleFacingRight = false;
			if (this.maxDistanceLeft < 30) {
				if (this.bubblePos.x - this.bubbleSize.w > 40) {
					this.bubblePos.x -= this.bubbleVel.x;
					this.bubbleVel.y = 0;
				} else {
					this.bubbleVel.x = 0;
					this.bubbleVel.y = 3;
				}
				if (this.bubblePos.y > this.canvasSize.h - 550) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 150;
				}
			}

			if (this.bubblePos.x - this.bubbleSize.w < this.maxDistanceLeft) {
				this.bubbleVel.x = 0;
				if (this.bubblePos.y > this.canvasSize.h - 550) {
					this.bubblePos.y -= this.bubbleVel.y;
				} else {
					this.bubblePos.y = 150;
				}
			}
			this.bubblePos.x -= this.bubbleVel.x;
		}
	}
	animateBubble(framesCounter) {
		if (framesCounter % 5 == 0) {
			this.image.frameIndex++;
		}
		if (this.image.frameIndex >= this.image.frames) {
			this.image.frameIndex = 4;
		}
	}
}
