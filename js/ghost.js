class Ghost {
	constructor(ctx, canvasSize) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.ghostPos = { x: 920, y: -85 };
		this.ghostSize = { h: 60, w: 60 };
		this.ghostVel = { x: -20, y: -20 }; // CAMBIAR A 1!

		this.image = new Image();
		this.image.src = "./images/ghost-left.png";
		this.image.frames = 2;
		this.image.frameIndex = 0;
	}

	drawGhost(playerPos, framesCounter) {
		this.ctx.drawImage(
			this.image,
			this.image.frameIndex * (this.image.width / this.image.frames),
			0,
			this.image.width / this.image.frames - 50,
			this.image.height - 50,
			this.ghostPos.x,
			this.ghostPos.y,
			this.ghostSize.w,
			this.ghostSize.h
		);

		/* this.ctx.fillStyle = "#808080"; */
		/* this.ctx.fillRect(this.ghostPos.x, this.ghostPos.y, this.ghostSize.w, this.ghostSize.h); */
		this.animateGhost(framesCounter);
		this.moveGhost(playerPos);
	}

	moveGhost(playerPos) {
		if (playerPos.x < this.ghostPos.x) {
			this.ghostPos.x -= this.ghostVel.x;
		} else if (playerPos.x > this.ghostPos.x) {
			this.ghostPos.x += this.ghostVel.x;
		}
		if (playerPos.y > this.ghostPos.y) {
			this.ghostPos.y += this.ghostVel.y;
		} else if (playerPos.y < this.ghostPos.y) {
			this.ghostPos.y -= this.ghostVel.y;
		}
	}
	animateGhost(framesCounter) {
		if (framesCounter % 5 == 0) {
			this.image.frameIndex++;
		}
		if (this.image.frameIndex >= this.image.frames - 2) {
			this.image.frameIndex = 0;
		}
	}
}
