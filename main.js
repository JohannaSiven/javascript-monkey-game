let playing = false;
console.log(playing);

function startGame() {
    playing = true;
    document.querySelector("button").style.visibility = "hidden";
    console.log(playing);
    let counter = 120;
    timer = document.querySelector('.timer');
    timer.innerText = counter;

    const interval = setInterval(function () {
        counter--;
        if (counter <= 0) {
            clearInterval(interval);
            playing = false;
            setTimeout(function(){ window.location.reload() }, 5000);
            document.querySelector("button").style.visibility = "visible";
            console.log(playing);
            console.log('game over')
            if (game.player1Score > game.player2Score) {
                console.log("player1 wins")
            } else if (game.player2Score > game.player1Score) {
                console.log("player1 wins")
            } else {
                console.log("draw")
            }
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
    canvas.parent('canvas');
    game.gameSetup();
}

function draw() {

    playing && game.gameDraw();
}

function keyPressed() {
    if (keyCode === 32) {
        game.player2.playerJump();
    } else if (keyCode == 16) {
        game.player1.playerJump();
    }
}
