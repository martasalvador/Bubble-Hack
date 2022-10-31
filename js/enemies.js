class Enemy {
	constructor(ctx, canvasSize, enemyPosX, enemyPosY) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.enemySize = { h: 40, w: 40 };
		this.enemyPos = { x: enemyPosX, y: enemyPosY };
		this.enemyVel = { x: 1.5, y: 1 };
	}
	drawEnemy() {
		this.ctx.fillStyle = "lightgreen";
		this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, this.enemySize.w, this.enemySize.h);
		this.moveEnemy();
	}
	moveEnemy() {
		if (this.enemyPos.x >= 700 - this.enemySize.w) {
			this.enemyVel.x *= -1;
		}
		if (this.enemyPos.x < 200) {
			this.enemyVel.x *= -1;
		}
		this.enemyPos.x += this.enemyVel.x;
	}
}
