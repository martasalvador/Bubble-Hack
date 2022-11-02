class Enemy {
	constructor(ctx, canvasSize, enemyPosX, enemyPosY) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.enemySize = { h: 50, w: 50 };
		this.enemyPos = { x: enemyPosX, y: enemyPosY };
		this.enemyVel = { x: 1.5, y: 1 };

		this.image = new Image();
		this.image.src = "./images/enemy-right.png";
		this.image.frames = 4;
		this.image.frameIndex = 0;
	}
	drawEnemy(framesCounter) {
		this.ctx.drawImage(
			this.image,
			this.image.frameIndex * (this.image.width / this.image.frames),
			0,
			this.image.width / this.image.frames - 50,
			this.image.height - 70,
			this.enemyPos.x,
			this.enemyPos.y,
			this.enemySize.w,
			this.enemySize.h
		);
		this.animateEnemy(framesCounter);
		this.moveEnemy();
	}
	moveEnemy() {
		if (this.enemyPos.x >= 700 - this.enemySize.w) {
			this.isFacingRight ? this.image : (this.image.src = "./images/enemy-left.png");
			this.enemyVel.x *= -1;
		}
		if (this.enemyPos.x <= 200) {
			this.isFacingRight ? this.image : (this.image.src = "./images/enemy-right.png");
			this.enemyVel.x *= -1;
		}
		this.enemyPos.x += this.enemyVel.x;
	}

	animateEnemy(framesCounter) {
		if (framesCounter % 5 == 0) {
			this.image.frameIndex++;
		}
		if (this.image.frameIndex >= this.image.frames - 2) {
			this.image.frameIndex = 0;
		}
	}
}
