class Background {
	constructor(ctx, canvasSize) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.backgroundSize = {
			w: this.canvasSize.w - 40,
			h: this.canvasSize.h - 40,
		};
		this.image = new Image();
		this.image.src = "./images/pixelBg.png";
	}
	createBackground() {
		this.ctx.drawImage(this.image, 0, 0, this.canvasSize.w, this.canvasSize.h);
		/* this.ctx.fillStyle = "#FF00FF";
		this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h); */

		this.ctx.fillStyle = "#1f001b";
		this.ctx.fillRect(20, 20, this.backgroundSize.w, this.backgroundSize.h);
	}
}
