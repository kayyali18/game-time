const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(0, 250, 10, 10, 'red', 'black'),
      // new Block(50, 250, 10, 10, 'green', 'black')
      

    ];
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      if (block.isCollidingWithWall(300, canvas.height)) {
       // this.endGame();
       const newDirection = {
         y: 50,
         dy: 0,
         dx: block.dx * -1,

       }

       else if(block.isCollidingWithWall(0, canvas.height)) {
       // this.endGame();
       const newDirection = {
         y: 250,
         dy: 0,
         dx: block.dx * 1,

       }

       block.changeDirection(newDirection);
       block.move();

     } else {
       block.move();
     }

      this.handleBlock(block)
      
      block.draw(this.ctx);
    }
  }

  handleBlock(block) {

    const { canvas } = this.ctx;

     if (block.isCollidingWithWall(canvas.width, canvas.height)) {

      } else {
        block.move();
        
      }
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

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}