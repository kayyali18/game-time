const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

// Spin up addition objects.assign and use .map() to manipulate original array for block placement//
// Consider object.assign() to create the objects, and .push() to add to this.blocks array//
    // let laneTwo = object.assign({}, this.blocks);

    this.blocks = [
      new Block(0, 425, 20, 20, 'red', 'black'),
      new Block(50, 425, 10, 10, 'green', 'black'),
      new Block(150, 425, 10, 10, 'blue', 'black'),  
      new Block(0, 325, 20, 20, 'red', 'black'),
      new Block(50, 325, 10, 10, 'green', 'black'),
      new Block(150, 325, 10, 10, 'blue', 'black'), 
      new Block(0, 225, 20, 20, 'red', 'black'),
      new Block(50, 225, 10, 10, 'green', 'black'),
      new Block(150, 225, 10, 10, 'blue', 'black'),  
      new Block(0, 125, 20, 20, 'red', 'black'),
      new Block(50, 125, 10, 10, 'green', 'black'),
      new Block(150, 125, 10, 10, 'blue', 'black'),
    ];
  }

  // draws one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      if (block.isCollidingWithWall(720)) {
       block.move();
       } else {
        block.move();
       }
      
      block.draw(this.ctx);
    })
  }

  
  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }
// Think about position of this method.. Both agree that may be better off within the GamePiece.JS
// This is how we will move the frog//
  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    // this.blocks.forEach( block => block.changeDirection(direction) );
  }

}