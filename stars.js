class Star {
  constructor(img, x, y, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.img = img;
    this.isCatched = false;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  update() {
    this.y += 2;
  }
}
