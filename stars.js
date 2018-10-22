class Stars {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.drops = drops
    this.canvas.width = canvas.width
    this.canvas.height = canvas.height
    this.x = x
    this.y = y
  }

  update() {

    for (var i = 0; i < 1; i++) {
      this.drops[i].y += 2
      console.log('hi')
    }
    var randomX = Math.floor(Math.random() * this.canvas.width)
    this.drops.push({ x: randomX, y: -50 })
    this.drops = this.drops.filter(function (drop) {
      return drop.y <= this.canvas.height
    })
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (var i = 0; i < this.drops.length; i++) {
      this.ctx.fillRect(this.drops[i].x, this.drops[i].y, 5, 5)
      this.ctx.fillStyle = 'blue'
    }
  }

  starFall() {
    var that = this
    this.intervalId = setInterval(function () {
      that.update()
      that.draw()
    }, 1000 / 60)
  }
}