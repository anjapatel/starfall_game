//TODO: make a wish button, triggered on click. maybe it falls in a cascading sequence from one side to the other

var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");
var wishButton = document.getElementById("wish");
var stars = [];
var points = 0;
var player;
var gameInterval;
var counter = 0;
var opacity = 1;
var sprite = new Image();
var starDrop = new Image();
sprite.src = "./images/sprite.png";
starDrop.src = "./images/star.png";

window.onload = function() {
  player = new Character(sprite, 50, 50, 50, canvas.height - 50);
  stars.push(new Star(starDrop, 250, 0, 10, 10));

  startGame();

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        player.moveLeft();
        break;
      case 39:
        player.moveRight();
        break;
    }
  };
};

function startGame() {
  gameInterval = setInterval(function() {
    update();
    drawEverything();
  }, 1000 / 60);
}

function update() {
  counter++;
  stars.forEach(function(star) {
    star.update();
    if (!player.checkCollision(star)) {
      star.isCatched = true;
      playerGrow();
      console.log("it collides");
      points++;
    }
    //fade stars here
    if (star.y > 500) {
      console.log("oh no");
      playerFade();
    }
  });

  stars = stars.filter(function(star) {
    if (star.y <= canvas.height && !star.isCatched) {
      return true;
    }
    return false;
  });
  callStar(120);
}

//i pulled this out of the update function to make it easier to adjust the number, can always add it back in. maybe check if default state is true?
function callStar(number) {
  if (counter % number == 0) createStar();
}

function playerFade() {
  if (player.opacity > -0.2) {
    player.opacity -= 0.2;
  } else {
    player.opacity = -0.2;
  }
  console.log("fade");
  console.log(player.opacity);
}

function playerGrow() {
  if (player.opacity < 1) {
    player.opacity += 0.2;
  } else {
    player.opacity = 1;
  }
  console.log(player.opacity);
}

function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  stars.forEach(function(star) {
    star.draw();
  });
  ctx.font = "12px serif";
  ctx.fillStyle = "white";
  ctx.fillText("Points: " + points, 50, 50);
}

function createStar() {
  var randomX = Math.floor(Math.random() * canvas.width);
  stars.push(new Star(starDrop, randomX, 0, 10, 10));
}

//ehhh worry about this tomorrow

wishButton.onclick = function() {
  console.log("twinkle twinkle");
  update();
  callStar(5);
  // updateStars(5);

  // drawEverything();

  // setInterval(function() {
  //   update();
  //   drawEverything();
  // }, 1000 / 60);
};
