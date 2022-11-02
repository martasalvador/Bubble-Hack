class Fruit {
	constructor(ctx, canvasSize, physics) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.physics = physics;
		this.fruitSize = { h: 40, w: 40 };
		this.fruitPos = { x: Math.floor(Math.random() * 800) + 20, y: 20 };
		this.fruitVel = { x: 1, y: 0 };

		this.image = new Image();
		this.image.src = "./images/fruit1.png";
		this.image.frames = 1;
		this.image.frameIndex = 0;
	}
	drawFruit() {
		this.ctx.drawImage(
			this.image,
			this.image.frameIndex * (this.image.width / this.image.frames),
			0,
			this.image.width / this.image.frames - 40,
			this.image.height - 40,
			this.fruitPos.x,
			this.fruitPos.y,
			this.fruitSize.w,
			this.fruitSize.h
		),
			/* (this.ctx.fillStyle = "#ffdd00"); */
			/* this.ctx.fillRect(this.fruitPos.x, this.fruitPos.y, this.fruitSize.w, this.fruitSize.h); */
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
