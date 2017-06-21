// const values for player and emeny movement
var ROW_CONST = 83;
var COL_CONST = 101;
// Player limit
// y axis -> 0 - 415
// x axis -> 0 - 404
var MAX_PLAYER_Y_POS = 415;
var MAX_PLAYER_X_POS = 404;
// Enemies our player must avoid
var Enemy = function(sprite, x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    this.x = x * COL_CONST;
    this.y = y * ROW_CONST;
    this.speed = speed;
    console.log(this.x, this.y, this.sprite)
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.speed) {
        // Enemy Instance
        this.x = this.x + dt * this.speed
    } else {
        // Player Instance
        //console.log(this.x, this.y, dt)
    }
    //this.y = this.y + dt;
    //console.log(this.x, this.y)
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite, x, y) {
    Enemy.call(this, sprite, x, y);
}
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.handleInput = function(keyCode) {
    if(keyCode && keyCode.x) {
        //make a function which calculates the range using prototypes
        var currentXValue = parseInt(this.x);
        var newXValue = currentXValue + parseInt(keyCode.x) * COL_CONST;
        var isXValueWithinRange = newXValue >= 0 && newXValue <= MAX_PLAYER_X_POS
        this.x = isXValueWithinRange ? newXValue : currentXValue;
    } else if(keyCode && keyCode.y){
        //make a function which calculates the range using prototypes
        var currentYValue = parseInt(this.y);
        var newYValue = currentYValue + parseInt(keyCode.y) * ROW_CONST;
        var isYValueWithinRange = newYValue >= 0 && newYValue <= MAX_PLAYER_Y_POS
        this.y = isYValueWithinRange ? newYValue : currentYValue;
    }else {
        // call player Reset method
        //return
    }
}
// Now instantiate your objects.
var Enemy1 = new Enemy('images/enemy-bug.png', -12, 1, 200);
var Enemy2 = new Enemy('images/enemy-bug.png', -7, 3, 200);
var Enemy3 = new Enemy('images/enemy-bug.png', -5, 1, 200);
var Enemy4 = new Enemy('images/enemy-bug.png', -10, 2, 200);
var Player1 = new Player('images/char-boy.png', 0, 5, 100);
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [Enemy1, Enemy2, Enemy3, Enemy4];
var player = Player1;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: {x: -1},
        38: {y: -1},
        39: {x: +1},
        40: {y: +1}
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
