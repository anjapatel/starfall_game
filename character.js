class Character {
  constructor(width, height, x, y) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.ctx = ctx;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.opacity = opacity;
    //this.ctx.globalAlpha = 1;
  }

  moveLeft() {
    if (this.x <= 0) {
      this.x = 0;
    } else {
      this.x -= 25;
    }
  }

  moveRight() {
    if (this.x >= 450) {
      this.x = 450;
    } else {
      this.x += 25;
    }
  }

  draw() {
    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 255, 0," + this.opacity + ")";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //this.ctx.globalAlpha = this.opacity;
    this.ctx.restore();
  }

  checkCollision(star) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = star.x;
    var otherright = star.x + star.width;
    var othertop = star.y;
    var otherbottom = star.y + star.height;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      return true;
    } else {
      return false;
    }
  }
}
