class Star {
    constructor() {
        this.x = Math.floor(Math.random(0, 1000) * 1000);
        this.y = Math.floor(Math.random(0, 800) * 1000);
        this.width = 20;
        this.height = 20;
    }

    starPreload() {
        this.img = loadImage("images/coins/coin1.png");
        console.log("STAR preloaded")
        console.log(this);
    }

    starDraw() {
        image(this.img, this.x, this.y, 20, 20);
    }
}