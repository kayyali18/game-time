module.exports = class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }


  // Will need a loop for creating cars/trucks and logs for the river
  // Will need to take the GamePiece class and sub class them to user driven(frog) & Game Automated(objects crossing)

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
  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }
// Will Consider this for Frog movement, calling this method within gamepiece
  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
    this.y = direction.y
  }

}