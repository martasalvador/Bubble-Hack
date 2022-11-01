class Ghost {
	constructor(ctx, canvasSize) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.ghostPos = { x: 750, y: 20 };
		this.ghostSize = { h: 40, w: 40 };
		this.ghostVel = { x: 2, y: 2 };
	}
	drawGhost(playerPos) {
		this.ctx.fillStyle = "#808080";
		this.ctx.fillRect(this.ghostPos.x, this.ghostPos.y, this.ghostSize.w, this.ghostSize.h);
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
}
