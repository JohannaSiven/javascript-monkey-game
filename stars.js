class Star {
    constructor() {
        this.x = Math.floor(Math.random(0, 1000 - this.width) * 1000);
        this.y = Math.floor(Math.random(0, 800 - this.height) * 1000);
        this.width = 20;
        this.height = 20;
        this.collector = null;
    }

    starPreload() {
        this.img = loadImage("images/starcoin.png");
    }

    starDraw() {
        switch (this.collector) {
            case 'player1':
                image(this.img, this.x, this.y, 20, 20);
                fill(color("rgba(204, 29, 146, 0.5)"))
                circle(this.x + 10, this.y + 10, 20)
                break;
            case 'player2':
                image(this.img, this.x, this.y, 20, 20);
                fill(color("rgba(29, 157, 204, 0.8)"))
                circle(this.x + 10, this.y + 10, 20)
                break;
            case null:
                image(this.img, this.x, this.y, 20, 20);
                break;
        }
    }
}