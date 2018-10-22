//TODO: make a wish button, triggered on click. maybe it falls in a cascading sequence from one side to the other

// player = new Character(30, 30, "red", 0, 110);

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var button = document.getElementById('wish')



var drops = [{x:400,y:0}, {x:700,y:0}]



function update() {
  for (var i = 0; i < 1; i++) {
    drops[i].y+=2
  }
  var randomX = Math.floor(Math.random()*canvas.width) 
  drops.push({x:randomX, y: -50})
  drops = drops.filter(function(drop){
    return drop.y <= canvas.height
  })
}

function drawEverything() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  for (var i = 0; i < drops.length; i++) {
    ctx.fillRect(drops[i].x,drops[i].y,5,5)
    ctx.fillStyle = 'yellow'
  }
}

setInterval(function(){
  update()
  drawEverything()
}, 1000/60)


button.onclick = function(){
  console.log("twinkle twinkle");
  function update() {
    for (var i = 0; i < drops.length; i++) {
      drops[i].y+=5
    }
    var randomX = Math.floor(Math.random()*canvas.width) 
    drops.push({x:randomX, y: -50})
    drops = drops.filter(function(drop){
      return drop.y <= canvas.height
    })
  }
  
  function drawEverything() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for (var i = 0; i < drops.length; i++) {
      ctx.fillRect(drops[i].x,drops[i].y,10,10)
      ctx.fillStyle = 'white'
    } 
  }
  
  setInterval(function(){
    update()
    drawEverything()
  }, 1000/60)
}

//how to get the first part to stop on click?