const Block = require('./Block');
const Block2 = require('./newBlock');
const Frog = require('./Frog');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

// Spin up addition objects.assign and use .map() to manipulate original array for block placement//
// Consider object.assign() to create the objects, and .push() to add to this.blocks array//
    // let laneTwo = object.assign({}, this.blocks);


// Decrease the size of the frog for collision detection effectiveness
    this.frog = new Frog(250, 470, 10, 10, 'cornflowerblue', 0, 0, 'White')
    console.log(this.frog)

    this.blocks = [

      // right to left objects
      new Block(0, 425, 20, 30, 'red', 1, 1, 'black'),
      new Block(50, 425, 10, 20, 'green', 1, 1, 'black'),
      new Block(150, 425, 10, 10, 'blue', 1, 1, 'black'),  
      new Block(350, 425, 20, 30, 'red', 1, 1, 'black'),
      new Block(450, 425, 10, 20, 'green', 1, 1, 'black'),  
      new Block(0, 325, 20, 30, 'red', 1, 2, 'black'),
      new Block(50, 325, 10, 20, 'green', 1, 2, 'black'),
      new Block(150, 325, 10, 10, 'blue', 1, 2, 'black'), 
      new Block(250, 325, 20, 30, 'red', 1, 2, 'black'),
      new Block(350, 325, 10, 20, 'green', 1, 2, 'black'),
      new Block(450, 325, 10, 10, 'blue', 1, 2, 'black'), 
      new Block(0, 225, 20, 30, 'red', 1, 1, 'black'),
      new Block(50, 225, 10, 20, 'green', 1, 1, 'black'),
      new Block(150, 225, 10, 10, 'blue', 1, 1, 'black'),
      new Block(250, 225, 20, 30, 'red', 1, 1, 'black'),
      new Block(350, 225, 10, 20, 'green', 1, 1, 'black'),
      new Block(450, 225, 10, 10, 'blue', 1, 1, 'black'),  
      new Block(0, 125, 20, 30, 'red', 1, 2, 'black'),
      new Block(50, 125, 10, 20, 'green', 1, 2, 'black'),
      new Block(150, 125, 10, 10, 'blue', 1, 2, 'black'),      
      new Block(250, 125, 20, 30, 'red', 1, 2, 'black'),
      new Block(350, 125, 10, 20, 'green', 1, 2, 'black'),
      new Block(450, 125, 10, 10, 'blue', 1, 2, 'black'),
      ];
      // left to right objects

    this.blocks2 = [

      new Block2(550, 375, 20, 40, 'red', -1, 1, 'black'),
      new Block2(600, 375, 10, 20, 'green', -1, 1, 'black'),
      new Block2(650, 375, 10, 10, 'blue', -1, 1, 'black'),  
      new Block2(700, 375, 20, 40, 'red', -1, 1, 'black'),
      new Block2(850, 375, 10, 20, 'green', -1, 1, 'black'),
      new Block2(900, 375, 10, 10, 'blue', -1, 1, 'black'),

      new Block2(550, 285, 20, 40, 'red', -1, 1, 'black'),
      new Block2(600, 285, 10, 20, 'green', -1, 1, 'black'),
      new Block2(650, 285, 10, 10, 'blue', -1, 1, 'black'),
      new Block2(700, 285, 20, 40, 'red', -1, 1, 'black'),
      new Block2(850, 285, 10, 20, 'green', -1, 1, 'black'),
      new Block2(900, 285, 10, 10, 'blue', -1, 1, 'black'),

      new Block2(550, 175, 20, 40, 'red', -1, 1, 'black'),
      new Block2(600, 175, 10, 20, 'green', -1, 1, 'black'),
      new Block2(650, 175, 10, 10, 'blue', -1, 1, 'black'),  
      new Block2(700, 175, 20, 40, 'red', -1, 1, 'black'),
      new Block2(850, 175, 10, 20, 'green', -1, 1, 'black'),
      new Block2(900, 175, 10, 10, 'blue', -1, 1, 'black'), 

      new Block2(550, 75, 20, 40, 'red', -1, 1, 'black'),
      new Block2(600, 75, 10, 20, 'green', -1, 1, 'black'),
      new Block2(650, 75, 10, 10, 'blue', -1, 1, 'black'),
      new Block2(700, 75, 20, 40, 'red', -1, 1, 'black'),
      new Block2(850, 75, 10, 20, 'green', -1, 1, 'black'),
      new Block2(900, 75, 10, 10, 'blue', -1, 1, 'black'),
    ];
  }

  // draws one frame of our game
  animate() {
    const { canvas } = this.ctx;
      this.frog.draw(this.ctx);
      // this.frog.autoMove();

      this.blocks.forEach( block => {
        if (block.isCollidingWithWall(720)) {
          block.autoMove();
        } else {
          block.autoMove();
        }

        block.draw(this.ctx);
      })      

      this.blocks2.forEach( block2 => {
        if (block2.isCollidingWithWall(720)) {
          block2.autoMove();
        } else {
          block2.autoMove();
        }

        block2.draw(this.ctx);
      })

      this.blocks.forEach( block => {
        if (block.isCollidingWith(this.frog)) {
           this.frog.resetGame();
        } 
      })

      this.blocks2.forEach( block2 => {
        if (block2.isCollidingWith(this.frog)) {
           this.frog.resetGame();
        } 
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
      x: 0,
      y: 0
    };

    if (e.key === 'ArrowRight') {
      this.frog.x += 10;

    } else if (e.key === 'ArrowLeft') {
      this.frog.x += -10;

    } else if (e.key === 'ArrowDown') {
      this.frog.y += 10;

    } else if (e.key === 'ArrowUp') {
      this.frog.y += -10;
    } 

    // this.frog.changeDirection(direction);
  }

 
}