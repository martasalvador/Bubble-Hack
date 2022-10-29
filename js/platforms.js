class Platform {
    constructor(ctx, canvasSize, platformPosX, platformPosY) {
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.platformSize = { h: 25, w: 500 }
        this.platformPos = { x: platformPosX, y: platformPosY }

    }

    drawPlatform() {
        this.ctx.fillStyle = "#FF00FF";
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h);
    }
}
