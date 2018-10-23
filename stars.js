class Star {
  constructor(x, y, width, height) {
    this.ctx = ctx
    this.stars = stars
    this.width = width
    this.height = height
    this.x = x
    this.y = y 
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.canvas = canvas
    this.canvas.width = canvas.width
    this.canvas.height = canvas.height
    this.counter = counter
  }

   draw() {
    this.ctx.save()
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.x,this.y,this.width, this.height)
    this.ctx.restore()
  }
  
   update() {
      this.y+=2      
   }

}