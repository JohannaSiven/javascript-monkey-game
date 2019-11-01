# Monkey Mania

Monkey Mania is a 2D game developed with Javascript and P5.js library. It's a two-player game where the players can move around the canvas with the aim of collecting more points than the opponent by when the timer runs out.

https://johannasiven.github.io/javascript-monkey-game/

## Structure

Each element - player, obstacles, star coins, background - are separated into their own scripts, which are all called from the game.js. The main P5 functions are in main.js, which calls the game.js.


## Missing features:
* additional levels
* animation of star coins collected
* additional floating obstacles with slowing down / speeding up effect when colliding with the player
* disable star coins from overlapping when randomly generated


## Known bugs:
* player can sometimes collect a point when colliding to the bottom side of an obstacle, if the coin is placed low above the obstacle

Link to the P5.js library: https://p5js.org/
