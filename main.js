const game = new Game();

function preload() {
    game.gamePreload();
}

function setup() {
    createCanvas(1000, 1000);
    game.gameSetup();
}

function draw() {
    game.gameDraw();
}

function keyPressed() {

    // jump
    if (keyCode === 32) {
        game.player.playerJump();
    }
}
