class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.grid = new Grid();
        this.star = [];
    }

    gamePreload() {
        this.background.backgroundPreload();
        this.player.playerPreload();
    }

    gameSetup() {
        this.player.playerSetup();
    }

    gameDraw() {
        this.background.backgroundDraw();
        this.player.playerDraw();

        while (this.star.length < 100) {
            this.star.push(new Star());
        }
        this.star.forEach(
            (instance) => {
                if (!instance.img) instance.starPreload();
                instance.starDraw();
            }
        );

        if (keyIsDown(37) && game.player.x > 0) {
            game.player.moveLeft();
        } else if (keyIsDown(39) && game.player.x < width - game.player.width) {
            game.player.moveRight();
        }

        let onTop = false;
        this.grid.obstacles.forEach((obstacle) => {
            this.grid.gridDraw();
            if (this.isCollision(obstacle, {
                    ...this.player,
                    y: this.player.y + this.player.height
                })) {

                // to avoid a collision when jumping
                if (this.player.velocity > 0) {
                    // when collision is on the top pane of an obstacle
                    this.player.currentY = obstacle.y - this.player.height;
                }
                onTop = true;
            }
            if (this.isCollision(obstacle, this.player)) {
                //this.player.velocity;
                this.player.velocity = 0
                console.log("hit")
            }
        })

        if (!onTop) {
            this.player.currentY = null
        }
    }

    isCollision(obstacle, player) {
        if (obstacle.x < player.x + player.width &&
            obstacle.x + obstacle.width > player.x &&
            obstacle.y < player.y + player.height &&
            obstacle.y + obstacle.height > player.y) {
            return true;
        }
        return false;
    }

    // isCollision(obstacle, star) {
    //     if (obstacle.x < star.x + star.width &&
    //         obstacle.x + obstacle.width > star.x &&
    //         obstacle.y < star.y + star.height &&
    //         obstacle.y + obstacle.height > star.y) {
    //         return true;
    //     }
    //     return false;
    // }
}