module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }


  // Will need a loop for creating cars/trucks and logs for the river
  // Will need to take the GamePiece class and sub class them to user driven(frog) & Game Automated(objects crossing)
  // Will need to reverse logic of colliding for river objects
  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }


// probably will not need to utilize this method
  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    )
  }

// This method will be responsible to create all objects within canvas
  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
// Will take care all Automated Game pieces
  autoMove() {
    this.x += this.dx * this.dxv;
    if( this.x > 535) {
      this.x += -540;
    } else if (this.x < -40) {
      this.x =+ 500;
    }
    this.y += this.dy * this.dyv;
  }

// Will Consider this for Frog movement, calling this method within gamepiece // OR HANDLEKEYPRESS METHOD ON GAME FILE//
  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
    this.y = direction.y;
    this.x = direction.x;
  }

}