// window.onload = function() {
//     const h1 = document.createElement("h1");
//     document.body.appendChild(h1);
  
//     let counter = 10;
//     h1.innerText = counter;
//     h1.style.textAlign = "center";
  
//     const interval = setInterval(function() {
//       counter--;
  
  
//       if (counter <= -1) {
//         // end game
//         // compare points
//         // print out winner
//       }
//     }, 1000);
//   };


const game = new Game();

function preload() {
    game.gamePreload();
}

function setup() {
    let canvas = createCanvas(1000, 800);
    canvas.parent('canvas');
    game.gameSetup();
}

function draw() {
    game.gameDraw();
}

function keyPressed() {
    if (keyCode === 32) {
        game.player2.playerJump();
    } else if (keyCode == 16) {
        game.player1.playerJump();
    }
}

// let player1Gamescore = document.querySelector('.player1Gamescore');
// let playerPoints = 0;
// player1Gamescore.innerText = playerPoints;

// let scoreContainer = document.querySelector('.score-container');

// let player2Gamescore = document.querySelector('.player2Gamescore');
// let player2Score = 0;
// player2Gamescore.innerText = player2Score;