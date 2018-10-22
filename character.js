class Character {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y; 
        this.speedX = 0;
        this.ctx = ctx;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() { this.x -= 25 }

    moveRight() { this.x += 25 }

    draw() {
        this.ctx.save()
  this.ctx.fillStyle = 'blue';

        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.restore()
    }

    checkCollision(star){
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = star.x;
        var otherright = star.x + (star.width);
        var othertop = star.y;
        var otherbottom = star.y + (star.height);
        var tap = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           tap = false;
        }
        return console.log(tap);
    }
}

