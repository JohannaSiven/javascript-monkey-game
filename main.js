let playing = false;

function startGame() {
  playing = true;
  document.querySelector("button").style.visibility = "hidden";
  let counter = 60;
  timer = document.querySelector(".timer");
  timer.innerText = counter;

  const interval = setInterval(function() {
    counter--;
    if (counter <= 0) {
      clearInterval(interval);
      playing = false;
      setTimeout(function() {
        window.location.reload();
      }, 5000);
      document.querySelector("button").style.visibility = "visible";
    }
    timer.innerText = counter;
  }, 1000);
}
const game = new Game();

function preload() {
  game.gamePreload();
}

function setup() {
  let canvas = createCanvas(1000, 800);
  canvas.parent("canvas");
  game.gameSetup();
}

function draw() {
  if (!playing) {
    if (!game.player1Score && !game.player2Score) {
      return;
    }
    if (game.player1Score > game.player2Score) {
      textSize(35);
      fill("white");
      text("Game over - Player 1 wins!", 300, 350);
    } else if (game.player2Score > game.player1Score) {
      textSize(35);
      fill("white");
      text("Game over - Player 2 wins!", 300, 350);
    } else {
      textSize(35);
      fill("white");
      text("Game over - Draw", 370, 350);
    }
  }
  playing && game.gameDraw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.player2.playerJump();
  } else if (keyCode == 16) {
    game.player1.playerJump();
  }
  return false;
}
