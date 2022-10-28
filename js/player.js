class Player {
    constructor(ctx, canvasSize, keys) {
        this.ctx = ctx;
        this.keys = keys;
        this.canvasSize = canvasSize;
        this.playerSize = { h: 50, w: 50 };
        this.playerPos = { x: this.canvasSize.w - 800, y: this.canvasSize.h - this.playerSize.h - 20 };
        this.playerVel = { x: 10, y: 2 };
        this.playerPhysics = { gravity: 0.4 };

        //this.setListeners()

    }
    drawPlayer() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);
        /* this.setListeners() */
        this.movePlayer();
    }
    movePlayer() {
        this.jump();
        this.moveLeft();
        this.moveRight();
    }
    jump() {
        /* if (this.playerPos.y > 20) {
            this.playerPos.y -= 10
            this.playerVel.y -= 4;
        } */
        this.playerPos.y -= 10
        this.playerVel.y -= 4;
    }
    moveRight() {
        /* if (this.playerPos.x + this.playerSize.h < this.canvasSize.w - 20) {
            this.playerPos.x += 10
        } */
        this.playerPos.x += 10
    }

    moveLeft() {
        /* if (this.playerPos.x > 20) {
            this.playerPos.x -= 10
        } */
        this.playerPos.x -= 10
    }

    /* setListeners() {
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case this.keys.RIGHT:
                    this.moveRight()
                    break
                case this.keys.LEFT:
                    this.moveLeft()
                    console.log()
                    break
                case this.keys.UP:
                    this.jump()
                    break
            }
        })
    } */

}