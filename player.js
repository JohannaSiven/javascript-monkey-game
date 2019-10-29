let player1FramesRight = [];
let player1FramesLeft = [];
let player1FramesDown = [];
let player1FramesUp = [];

let counter = 0;

class Player {
    constructor() {
        this.x = 0;
        this.velocity = 0;
        this.gravity = 0.1;
        this.jumpCount = 0;
        this.direction = 'down';
        this.movement = false;
        this.frameFocus = player1FramesDown;
    }

    playerPreload() {
        this.img = loadImage("images/player1/player1-right1.png");

        player1FramesRight.push(loadImage("images/player1/player1-right1.png"));
        player1FramesRight.push(loadImage("images/player1/player1-right2.png"));
        player1FramesRight.push(loadImage("images/player1/player1-right3.png"));

        player1FramesLeft.push(loadImage("images/player1/player1-left1.png"));
        player1FramesLeft.push(loadImage("images/player1/player1-left2.png"));
        player1FramesLeft.push(loadImage("images/player1/player1-left3.png"));

        player1FramesDown.push(loadImage("images/player1/player1-front1.png"));
        player1FramesDown.push(loadImage("images/player1/player1-front2.png"));
        player1FramesDown.push(loadImage("images/player1/player1-front3.png"));

        player1FramesUp.push(loadImage("images/player1/player1-back1.png"));
        player1FramesUp.push(loadImage("images/player1/player1-back2.png"));
        player1FramesUp.push(loadImage("images/player1/player1-back3.png"));
    }

    playerSetup() {
        this.y = height - this.img.height;
        this.width = this.img.width;
        this.height = this.img.height;
        this.defaultY = this.y;
    }

    playerDraw() {
        if (frameCount % 1 === 0) {
            counter = (counter + 1) % player1FramesDown.length;

            switch (this.direction) {
                case 'down':
                    console.log("down")
                    // this.frameFocus = player1FramesDown;
                    let player1FrameD = player1FramesDown[counter];
                    image(player1FrameD, this.x, this.y, this.width, this.height);
                    break;
                case 'left':
                    console.log("left")
                    // this.frameFocus = player1FramesLeft;
                    let player1FrameL = player1FramesLeft[counter];
                    image(player1FrameL, this.x, this.y, this.width, this.height);
                    break;
                case 'right':
                    console.log("right")
                    // this.frameFocus = player1FramesRight;
                    let player1FrameR = player1FramesRight[counter];
                    image(player1FrameR, this.x, this.y, this.width, this.height);
                    break;
                case 'up':
                    console.log("up")
                    // this.frameFocus = player1FramesUp;
                    let player1FrameU = player1FramesUp[counter];
                    image(player1FrameU, this.x, this.y, this.width, this.height);
                    break;
                default:
                    console.log("still")
                    image("images/player1/player1-down2.png", this.x, this.y, this.width, this.height);

            }
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
            this.velocity = -8;
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







// let playerDown;
// let playerUp;
// let playerLeft;
// let playerRight;    

//     playerPreload() {
//         playerDown = loadAnimation(
//             "images/player1/player1-front1.png",
//             "images/player1/player1-front2.png",
//             "images/player1/player1-front3.png"
//         );
//         playerUp = loadAnimation(
//             "images/player1/player1-back1.png",
//             "images/player1/player1-back2.png",
//             "images/player1/player1-back3.png"
//         );
//         playerLeft = loadAnimation(
//             "images/player1/player1-left1.png",
//             "images/player1/player1-left2.png",
//             "images/player1/player1-left3.png"
//         );
//         playerRight = loadAnimation(
//             "images/player1/player1-right1.png",
//             "images/player1/player1-right2.png",
//             "images/player1/player1-right3.png"
//         );
//     }

//     playerSetup() {
//         this.y = 0;
//         this.defaultY = this.y;
//     }

//     playerDraw() {
//         switch (this.direction) {
//             case 'down':
//                 console.log("down")
//                 animation(playerDown, this.x, this.y)
//                 playerDown.frameDelay = 10;
//                 break;
//             case 'left':
//                 console.log("left")
//                 animation(playerLeft, this.x, this.y)
//                 playerLeft.frameDelay = 10;
//                 break;
//             case 'right':
//                 console.log("right")
//                 animation(playerRight, this.x, this.y)
//                 playerRight.frameDelay = 10;
//                 break;
//             case 'up':
//                 console.log("up")
//                 animation(playerUp, this.x, this.y)
//                 playerUp.frameDelay = 10;
//                 break;
//         }
//     }