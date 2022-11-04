class Platform {
	constructor(ctx, canvasSize, platformPosX, platformPosY) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.platformSize = { h: 25, w: 500 };
		this.platformPos = { x: platformPosX, y: platformPosY };

		this.image = new Image();
		this.image.src = "./images/pixelBgPlat.png";
	}

	drawPlatform() {
		this.ctx.drawImage(this.image, this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h);
	}
}
