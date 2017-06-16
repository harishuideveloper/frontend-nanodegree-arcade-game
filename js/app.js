// const values for player and emeny movement
var ROW_CONST = 83;
var COL_CONST = 101;
// Enemies our player must avoid
var Enemy = function(sprite, x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    this.x = x * COL_CONST;
    this.y = y * ROW_CONST;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // this.x = this.x * dt * COL_CONST;
    // this.y = this.y * dt * ROW_CONST;
    //console.log(this.x, dt, COL_CONST)
    //this.render()
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
    console.log(keyCode);
}
// Now instantiate your objects.
var Enemy1 = new Enemy('images/enemy-bug.png', 0, 1);
//var Enemy2 = new Enemy('images/enemy-bug.png', 1*COL_CONST, 3*ROW_CONST);
var Player1 = new Player('images/char-boy.png', 2, 5);
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [Enemy1];
var player = Player1;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
