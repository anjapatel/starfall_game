// class Character {
//     constructor(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.ctx.fillStyle = color;
//     this.ctx = ctx;
//     }
//     // this.update = function(){
//     //     //ctx = myGameArea.context;
//     //     ctx.fillStyle = color;
//     //     ctx.fillRect(this.x, this.y, this.width, this.height);
//     // }
//     // this.newPos = function() {
//     //     this.x += this.speedX;
//     //     this.y += this.speedY;
//     // }

//     update() {
//         this.x -= 0.5
//         if (this.x < -this.width) {
//             this.x += this.width
//         }
//     }

//     draw() {
//         this.ctx.drawImage(this.img,this.x,0,this.width,this.height)
//         this.ctx.drawImage(this.img,this.x+this.width,0,this.width, this.height)
//       }
// }

