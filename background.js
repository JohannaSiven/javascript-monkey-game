// p5 is not loaded yet bc this file is part of GAME initialization --> p5 functions not available

class Background {
    // 2 initialize position for each component
    constructor() {
        this.xBackground = 0;
    }
    // preload assets of the background
    backgroundPreload() {
        this.bgBackground = loadImage("images/background-img.jpg");

    }
    // draw background
    backgroundDraw() {
        image(this.bgBackground, this.xBackground, 0, height, width);
    }
}




