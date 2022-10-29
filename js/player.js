class Player {
    constructor(ctx, canvasSize, keys, physics) {
        this.ctx = ctx;
        this.keys = keys;
        this.physics = physics
        this.canvasSize = canvasSize;

        this.playerSize = { h: 50, w: 50 };
        this.playerPos = { x: this.canvasSize.w - 800, y: this.canvasSize.h - this.playerSize.h - 100 };
        this.playerVel = { x: 10, y: 6 };

        this.floor = this.canvasSize.h - this.playerSize.h - 20
        this.setListeners()

    }
    drawPlayer() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);
        this.setGravity()
    }
    jump() {
        if (this.playerPos.y > this.playerSize.h + 20) {
            this.playerPos.y -= 50;
        } else {
            this.playerPos.y += 0;
        }

    }
    moveRight() {
        if (this.playerPos.x + this.playerSize.h < this.canvasSize.w - 20) {
            this.playerPos.x += 10
        }

    }

    moveLeft() {
        if (this.playerPos.x > 20) {
            this.playerPos.x -= 10
        }

    }

    setListeners() {
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
    }
    setGravity() {
        if (this.playerPos.y + this.playerSize.h < this.floor) {
            this.playerPos.y += this.playerVel.y;
            this.playerVel.y += this.physics.gravity;
        } else {
            this.playerPos.y = this.floor
            this.playerVel.y = 1;
        }

    }
}