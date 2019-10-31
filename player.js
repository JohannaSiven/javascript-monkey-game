let playerDown;
let playerUp;
let playerLeft;
let playerRight;

class Player {
    constructor() {
        this.x = 0;
        this.velocity = 0;
        this.gravity = 0.1;
        this.jumpCount = 0;
        this.direction = 'down';
    }

    playerPreload() {
        this.img = loadImage("images/player1/player1-right1.png")
        this.x = 20;

        playerDown = loadAnimation(
            "images/player1/player1-front1.png",
            "images/player1/player1-front2.png",
            "images/player1/player1-front3.png"
        );
        playerUp = loadAnimation(
            "images/player1/player1-back1.png",
            "images/player1/player1-back2.png",
            "images/player1/player1-back3.png"
        );
        playerLeft = loadAnimation(
            "images/player1/player1-left1.png",
            "images/player1/player1-left2.png",
            "images/player1/player1-left3.png"
        );
        playerRight = loadAnimation(
            "images/player1/player1-right1.png",
            "images/player1/player1-right2.png",
            "images/player1/player1-right3.png"
        );
    }

    playerSetup() {
        this.y = height - this.img.height / 2;
        this.width = this.img.width;
        this.height = this.img.height / 2;
        this.defaultY = this.y;
    }

    playerDraw() {
        switch (this.direction) {
            case 'down':
                animation(playerDown, this.x, this.y)
                playerDown.frameDelay = 10;
                break;
            case 'left':
                animation(playerLeft, this.x, this.y)
                playerLeft.frameDelay = 10;
                break;
            case 'right':
                animation(playerRight, this.x, this.y)
                playerRight.frameDelay = 10;
                break;
            case 'up':
                animation(playerUp, this.x, this.y)
                playerUp.frameDelay = 10;
                break;
        }

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
        this.movement = false;
        this.direction = 'down';
    }

    playerJump() {
        if (this.jumpCount < 2) {
            this.velocity = -7;
            this.jumpCount++;
            this.currentY = null;
        }
        this.movement = true;
        this.direction = 'up';
    }

    moveLeft() {
        this.x -= 5;
        this.direction = 'left';
        this.movement = true;
    }

    moveRight() {
        this.x += 5;
        this.direction = 'right';
        this.movement = true
    }
}