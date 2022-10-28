const App = {
    appName: "IRON BUBBLE",
    version: "1.0.0",
    license: undefined,
    author: "Marta Salvador y Manuel Atance",
    description: "Mi primerito juego",
    ctx: undefined,
    canvasSize: { w: 900, h: 500 },
    keys: {
        UP: 'ArrowUp',
        RIGHT: 'ArrowRight',
        LEFT: 'ArrowLeft',
        JUMP: ' '
    },
    background: undefined,
    player: undefined,

    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()

        this.start()

    },
    setContext() {
        this.ctx = document.querySelector("#canvas").getContext("2d");
    },
    setDimensions() {
        document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#canvas').setAttribute('width', this.canvasSize.w)
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 60)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },
    drawAll() {
        this.background = new Background(this.ctx, this.canvasSize)
        this.background.createBackground();

        this.createPlayer()
    },
    createPlayer() {
        this.player = new Player(this.ctx, this.canvasSize, this.keys)
        this.player.drawPlayer()
    },
    setEventListeners() {
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case this.keys.RIGHT:
                    this.player.moveRight()
                    console.log(this.player)
                    break
                case this.keys.LEFT:
                    this.player.moveLeft()
                    console.log(e.key)
                    break
                case this.keys.UP:
                    this.player.jump()
                    break
            }
        })
    }
}