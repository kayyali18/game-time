const GamePiece = require('./GamePiece');
//TEST

// extend GamePiece class
module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, dx, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color, dx);

    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  // changeDirection(direction) {
  //   this.dx = direction.dx;
  //   this.dy = direction.dy;
  //   this.y = direction.y;
  //   this.x = direction.x;
  // }
}