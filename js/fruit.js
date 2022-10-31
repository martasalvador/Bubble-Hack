class Fruit {
	constructor(ctx, canvasSize, physics) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.physics = physics;
		this.fruitSize = { h: 30, w: 30 };
		this.fruitPos = { x: Math.floor(Math.random() * 800) + 20, y: 20 };
		this.fruitVel = { x: 1, y: 0 };
	}
	drawFruit() {
		this.ctx.fillStyle = "#ffdd00";
		this.ctx.fillRect(this.fruitPos.x, this.fruitPos.y, this.fruitSize.w, this.fruitSize.h);
		this.moveFruit();
	}
	moveFruit() {
		this.fruitPos.y += this.fruitVel.y;
		if (this.fruitPos.y + this.fruitSize.h + this.fruitVel.y <= this.canvasSize.h - 20 - this.physics.fruitsGravity) {
			this.fruitVel.y += this.physics.fruitsGravity;
		} else {
			this.fruitVel.y = 0;
		}
	}
}
