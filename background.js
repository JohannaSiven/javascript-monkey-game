class Background {
    constructor() {
        this.xBackground = 0;
    }
    backgroundPreload() {
        this.bgBackground = loadImage("images/background-img.jpg");

    }
    backgroundDraw() {
        image(this.bgBackground, this.xBackground, 0, 1000, 800);
    }
}