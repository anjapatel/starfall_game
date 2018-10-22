//TODO: make a wish button, triggered on click. maybe it falls in a cascading sequence from one side to the other

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var wishButton = document.getElementById('wish')
var drops = [{x:400,y:0}, {x:700,y:0}]
var stars = [{x:400,y:0}, {x:700,y:0}]
var player;
var gameInterval
var counter = 0

window.onload = function(){
player = new Character(50,50,50,canvas.height-50)
  startGame()

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: player.moveLeft();  //console.log('left',  player); 
      break;
      case 39: player.moveRight(); //console.log('right', player); 
      break;
    }
  }
}

function startGame(){
  gameInterval = setInterval(function(){
    update()
    drawEverything()
  }, 1000/60)
}

function update() {
  counter++
  updateStars(2)
}

function drawEverything(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  drawStars()
  player.draw()
}

function createStar() {
  var randomX = Math.floor(Math.random() * canvas.width);
  stars.push({ x: randomX, y: -50 });
}

function drawStars() {
  ctx.save()
  ctx.fillStyle = 'red'
  for (var i = 0; i < stars.length; i++) {
    ctx.fillRect(stars[i].x,stars[i].y,5,5)
  }
  ctx.restore()
}

//what is this again lol
function updateStars(number) {
  for (var i = 0; i < stars.length; i++) {
    stars[i].y+=2
  }

    if (counter  % 180 == 0) {
      createStar() 
    }

    stars = stars.filter(function(star){
      // console.log(stars[i].x)
      return star.y <= canvas.height
    })
    
}


wishButton.onclick = function(){
  console.log("twinkle twinkle");
  updateStars(200)
  
 drawEverything()
  
  setInterval(function(){
    update()
    drawEverything()
  }, 1000/60)
}

