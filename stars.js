class Star {
  constructor(img, x, y, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.img = img;
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.isCatched = false;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // this.ctx.save();
    // this.ctx.fillStyle = "red";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // this.ctx.restore();
  }

  update() {
    this.y += 2;
  }
}
