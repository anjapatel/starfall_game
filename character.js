class Character {
  constructor(img, width, height, x, y) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.img = img;
    this.opacity = opacity;
    this.ctx.globalAlpha = opacity;
  }

  movingAround() {
    if (rightArrowPressed && player.x <= 700) {
      player.x += 5;
    } else if (leftArrowPressed && player.x >= 0) {
      player.x -= 5;
    }
  }

  draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;

    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
