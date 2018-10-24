class Character {
  constructor(img, width, height, x, y) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.img = img;
    // this.img = new Image();
    // this.img.src = "./images/sprite.png";
    //this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.opacity = opacity;
    this.ctx.globalAlpha = opacity;
  }

  moveLeft() {
    if (this.x <= 0) {
      this.x = 0;
    } else {
      this.x -= 25;
    }
  }

  moveRight() {
    if (this.x >= 750) {
      this.x = 750;
    } else {
      this.x += 25;
    }
  }

  draw() {
    this.ctx.save();

    //this works

    // this.ctx.fillStyle = "blue";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    // this.ctx.stroke();
    // this.ctx.fillStyle = "rgba(230, 230, 250," + this.opacity + ")";
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
