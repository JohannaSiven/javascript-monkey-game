// // let coinsFrames = [];

// class Star {
//     constructor() {
//         // this.x = random(0, width);
//         // this.y = random(0, height);
//         this.x = Math.floor(Math.random(0, 1000) * 1000);
//         this.y = Math.floor(Math.random(0, 800) * 1000);
//         this.width = 20;
//         this.height = 20;
//     }

//     starPreload() {
//         this.img = loadImage("images/coins/coin1.png");
//         console.log("STAR preloaded")
//         console.log(this);
//     }

//     starDraw() {
//         console.log('LOOK HERE ', this)
//         // clear();
//         // if (frameCount % 8 === 0) {
//         //     counterStar = (counterStar + 1) % coinsFrames.length; 
//         // }
//         // const coinFrame = coinsFrames[counterStar];
//         image(this.img, this.x, this.y, 20, 20);
//     }
// }

// // class Star {
// //     constructor() {
// //         this.x = Math.floor(Math.random(0, 1000) * 1000);
// //         this.y = Math.floor(Math.random(0, 800) * 1000);
// //         this.height = 20;
// //         this.width = 20;
// //     }

// //     starPreload() {
// //         coinsFrames.push(loadImage("images/coins/coin1.png"));
// //         coinsFrames.push(loadImage("images/coins/coin2.png"));
// //         coinsFrames.push(loadImage("images/coins/coin3.png"));
// //         coinsFrames.push(loadImage("images/coins/coin4.png"));
// //         coinsFrames.push(loadImage("images/coins/coin5.png"));
// //         coinsFrames.push(loadImage("images/coins/coin6.png"));
// //     }

// //     starDraw() {
// //         clear();
// //         if (frameCount % 8 === 0) {
// //             counterStar = (counterStar + 1) % coinsFrames.length; 
// //         }
// //         const coinFrame = coinsFrames[counterStar];
// //         image(coinFrame, this.x, this.y, this.height, this.width);
// //     }
// // }