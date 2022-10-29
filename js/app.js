const App = {
    appName: "IRON BUBBLE",
    version: "1.0.0",
    license: undefined,
    author: "Marta Salvador y Manuel Atance",
    description: "Mi primerito juego",
    ctx: undefined,
    canvasSize: { w: 900, h: 650 },
    keys: {
        UP: 'ArrowUp',
        RIGHT: 'ArrowRight',
        LEFT: 'ArrowLeft',
        JUMP: ' '
    },
    physics: {
        gravity: 0.9
    },
    background: undefined,
    player: undefined,
    platforms: [],

    init() {
        this.setContext()
        this.setDimensions()
        this.createPlayer()

        this.createPlatforms()
        this.player.setListeners()

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

        this.platforms.forEach(p => { p.drawPlatform() })

        this.player.drawPlayer()

    },
    createPlayer() {
        this.player = new Player(this.ctx, this.canvasSize, this.keys, this.physics)

    },
    createPlatforms() {
        this.platforms.push(
            new Platform(this.ctx, this.canvasSize, 200, 170),
            new Platform(this.ctx, this.canvasSize, 200, 320),
            new Platform(this.ctx, this.canvasSize, 200, 470)
        )
    }

}