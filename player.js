// p5 is not loaded yet bc this file is part of GAME initialization --> p5 functions not available

class Player {
    constructor() {
        this.x = 0;
        this.velocity = 0;
        this.gravity = 0.1;
        this.jumpCount = 0;
    }

    playerPreload() {
        this.img = loadImage("images/character-right.png");
    }

    // use setup of player to define its height and width
    playerSetup() {
        this.y = height - this.img.height;
        this.width = this.img.width;
        this.height = this.img.height;
        this.defaultY = this.y;
    }

    playerDraw() {
        image(this.img, this.x, this.y, this.width, this.height);

        if (this.currentY) {
            this.y = this.currentY;
            this.jumpCount = 0;
            return;
        }

        // falling down
        this.velocity += this.gravity * 2;
        this.y += this.velocity;
        if (this.y > this.defaultY) {
            this.y = this.defaultY;
            this.jumpCount = 0;
        }
    }

    playerJump() {
        if (this.jumpCount < 2) {
            this.velocity = -8;
            this.jumpCount++;
            this.currentY = null;
        }
    }

    moveLeft() {
        this.x -= 5;
    }

    moveRight() {
        this.x += 5;
    }
}