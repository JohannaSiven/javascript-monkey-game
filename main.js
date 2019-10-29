const game = new Game();

function preload() {
    game.gamePreload();
}

function setup() {
    createCanvas(1000, 800);
    game.gameSetup();
}

function draw() {
    game.gameDraw();
}

function keyPressed() {
    if (keyCode === 32) {
        game.player.playerJump();
    }
}