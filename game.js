class Game {
    constructor() {
        this.background = new Background();
        this.player1 = new Player();
        this.player2 = new Player();
        this.grid = new Grid();
        this.starArr = [];
    }

    gamePreload() {
        this.background.backgroundPreload();
        this.player1.playerPreload();
        this.player2.playerPreload();
    }

    gameSetup() {
        this.player1.playerSetup();
        this.player2.playerSetup();
    }

    gameDraw() {
        // draw background
        this.background.backgroundDraw();

        // draw stars
        while (this.starArr.length < 100) {
            this.starArr.push(new Star());
        }
        this.starArr.forEach(
            (star, indexStar) => {
                if (!star.img) star.starPreload();
                star.starDraw();
                game.grid.obstacles.forEach((obstacle) => {
                    if (game.isObstacleStarCollision(obstacle, star)) {
                        game.starArr.splice(indexStar, 1);
                    }
                })
                if (game.starCollected(star) == "player1") {
                    star.collected = true;
                    star.collector = 'player1';
                    console.log(star.collected, star.collector, game.starArr)
                } else if (game.starCollected(star) == "player2") {
                    star.collected = true;
                    star.collector = 'player2';
                    console.log(star.collected, star.collector, game.starArr)
                }
            }
        );

        // draw player1
        this.player1.playerDraw();
        let onTop = false;
        this.grid.obstacles.forEach((obstacle) => {
            this.grid.gridDraw();
            if (this.isObstaclePlayerCollision(obstacle, {
                    ...this.player1,
                    y: this.player1.y + this.player1.height,
                })) {
                //to avoid a collision when jumping
                if (this.player1.velocity > 0) {
                    // when collision is on the top pane of an obstacle
                    this.player1.currentY = obstacle.y - this.player1.height;
                }
                onTop = true;
            }
            if (this.isObstaclePlayerCollision(obstacle, this.player1)) {
                this.player1.velocity = 0;
                //console.log("hit");
            }
        })
        if (!onTop) {
            this.player1.currentY = null;
        }
        if (keyIsDown(65) && game.player1.x > game.player1.width / 3) {
            game.player1.moveLeft();
        } else if (keyIsDown(68) && game.player1.x < width - game.player1.width / 3) {
            game.player1.moveRight();
        }

        // draw player2
        this.player2.playerDraw();
        //this.player2.x = width - (this.player2.width * 0.5);
        let onTop2 = false;
        this.grid.obstacles.forEach((obstacle) => {
            this.grid.gridDraw();
            if (this.isObstaclePlayerCollision(obstacle, {
                    ...this.player2,
                    y: this.player2.y + this.player2.height,
                })) {
                //to avoid a collision when jumping
                if (this.player2.velocity > 0) {
                    // when collision is on the top pane of an obstacle
                    this.player2.currentY = obstacle.y - this.player2.height;
                }
                onTop2 = true;
            }
            if (this.isObstaclePlayerCollision(obstacle, this.player2)) {
                this.player2.velocity = 0;
                //console.log("hit");
            }
        })
        if (!onTop2) {
            this.player2.currentY = null;
        }
        if (keyIsDown(37) && game.player2.x > game.player2.width / 3) {
            game.player2.moveLeft();
        } else if (keyIsDown(39) && game.player2.x < width - game.player2.width / 3) {
            game.player2.moveRight();
        }

    }

    isObstaclePlayerCollision(obstacle, player1) {
        if (obstacle.x < player1.x &&
            obstacle.x + obstacle.width > player1.x &&
            obstacle.y < player1.y + player1.height &&
            obstacle.y + obstacle.height > player1.y) {
            return true;
        }
        return false;
    }

    isObstacleStarCollision(obstacle, star) {
        if (obstacle.x <= star.x &&
            obstacle.x + obstacle.width >= star.x &&
            obstacle.y <= star.y + star.height &&
            obstacle.y + obstacle.height >= star.y) {
            return true;
        }
        if (star.x + star.width > width || star.y + star.height > height) {
            return true;
        }
        return false;
    }

    starCollected(star) {
        if (
            this.player1.x + (this.player1.width * 0.5) >= star.x &&
            this.player1.x <= (star.x + star.width) &&
            this.player1.y + (this.player1.height * 0.5) >= star.y && this.player1.y <= (star.y + star.height)) {
            return "player1";
        } else if (
            this.player2.x + (this.player2.width * 0.5) >= star.x &&
            this.player2.x <= (star.x + star.width) &&
            this.player2.y + (this.player2.height * 0.5) >= star.y && this.player2.y <= (star.y + star.height)) {
            return "player2";
        }
    }

}