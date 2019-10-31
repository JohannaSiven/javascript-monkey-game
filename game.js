class Game {
    constructor() {
        this.background = new Background();
        this.player1 = new Player(20);
        this.player2 = new Player(960);
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
        this.background.backgroundDraw();

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
                    star.collector = 'player1';
                } else if (game.starCollected(star) == "player2") {
                    star.collector = 'player2';
                }
            }
        );

        this.player1.playerDraw();
        let onTop = false;
        this.grid.obstacles.forEach((obstacle) => {
            this.grid.gridDraw();
            if (this.isObstaclePlayerCollision(obstacle, this.player1)) {
                //to avoid a collision when jumping
                if (this.player1.velocity > 0) {
                    // when collision is on the top pane of an obstacle
                    if (this.player1.y < obstacle.y - 30) {
                        this.player1.currentY = obstacle.y - this.player1.height;
                        onTop = true;
                    }
                }
            }
            if (this.isObstaclePlayerCollision(obstacle, this.player1)) {
                this.player1.velocity = (1 + this.player1.velocity) % 10;
            }
        })
        if (!onTop) {
            this.player1.currentY = null;
        }

        this.player2.playerDraw();
        let onTop2 = false;
        this.grid.obstacles.forEach((obstacle) => {
            this.grid.gridDraw();
            if (this.isObstaclePlayerCollision(obstacle, this.player2)) {
                //to avoid a collision when jumping
                if (this.player2.velocity > 0) {
                    // when collision is on the top pane of an obstacle
                    if (this.player2.y < obstacle.y - 30) {
                        this.player2.currentY = obstacle.y - this.player2.height;
                        onTop2 = true;
                    }
                }
            }
            if (this.isObstaclePlayerCollision(obstacle, this.player2)) {
                this.player2.velocity = (1 + this.player2.velocity) % 10;
            }
        })
        if (!onTop2) {
            this.player2.currentY = null;
        }

        const collidingObstacles = this.grid.obstacles.filter(obstacle =>
            this.isObstaclePlayerCollision(obstacle, this.player2)
        ).length;

        if (keyIsDown(37) && game.player2.x > game.player2.width / 3) {
            if (
                (game.player2.jumpCount === 0 && collidingObstacles < 2) ||
                collidingObstacles === 0
            ) {
                game.player2.moveLeft();
            }
        } else if (
            keyIsDown(39) && game.player2.x < width - game.player2.width
        ) {
            if (
                (game.player2.jumpCount === 0 && collidingObstacles < 2) ||
                collidingObstacles === 0
            ) {
                game.player2.moveRight();
            }
        }

        const collidingObstacles2 = this.grid.obstacles.filter(obstacle =>
            this.isObstaclePlayerCollision(obstacle, this.player1)
        ).length;

        if (keyIsDown(65) && game.player1.x > game.player1.width / 3) {
            if (
                (game.player1.jumpCount === 0 && collidingObstacles2 < 2) ||
                collidingObstacles2 === 0
            ) {
                game.player1.moveLeft();
            }
        } else if (
            keyIsDown(68) && game.player1.x < width - game.player1.width
        ) {
            if (
                (game.player1.jumpCount === 0 && collidingObstacles2 < 2) ||
                collidingObstacles2 === 0
            ) {
                game.player1.moveRight();
            }
        }

        this.player1Score = (game.starArr.filter(function (star) {
            return star.collector == "player1"
        })).length;
        this.player2Score = (game.starArr.filter(function (star) {
            return star.collector == "player2"
        })).length;

        let player1Scores = document.querySelector('.player1gamescore');
        player1Scores.innerText = this.player1Score;
        let player2Scores = document.querySelector('.player2gamescore');
        player2Scores.innerText = this.player2Score;
    }

    isObstaclePlayerCollision(obstacle, player1) {
        if (player1.x + player1.width > obstacle.x && player1.x < obstacle.x + obstacle.width &&
            player1.y <= obstacle.y + obstacle.height && player1.y + player1.height >= obstacle.y) {
            return true
        }
        return false;
    }

    isObstacleStarCollision(obstacle, star) {
        if (star.x + star.width > obstacle.x && star.x < obstacle.x + obstacle.width &&
            star.y < obstacle.y + obstacle.height && star.y + star.height > obstacle.y) {
            return true
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
            this.player1.y + (this.player1.height) >= star.y && this.player1.y <= (star.y + star.height)) {
            return "player1";
        } else if (
            this.player2.x + (this.player2.width * 0.5) >= star.x &&
            this.player2.x <= (star.x + star.width) &&
            this.player2.y + (this.player2.height) >= star.y && this.player2.y <= (star.y + star.height)) {
            return "player2";
        }
    }

}