//TODO: make a wish button, triggered on click. maybe it falls in a cascading sequence from one side to the other

var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");
var wishButton = document.getElementById("wish");

let wishActivated = false;

var stars = [];
var points = 0;
var player;
var gameInterval;
var x;
var counter = 0;
var opacity = 1;
var wishInterval;
var spriteInterval;
var sprite = new Image();
var starDrop = new Image();
sprite.src = "./images/kindling.gif";
starDrop.src = "./images/star.png";
//sprite.style.opacity = "0.5";

window.onload = function() {
  wishButton.style.display = "none";
  player = new Character(sprite, 100, 100, 350, canvas.height - 100);
  stars.push(new Star(starDrop, 250, 0, 20, 20));

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
    update(120);
    drawEverything();
  }, 1000 / 60);
}

function update(number) {
  counter++;
  stars.forEach(function(star) {
    star.update();
    if (!player.checkCollision(star)) {
      star.isCatched = true;
      console.log("it collides");
      points++;
      showWishButton();
      if (!wishActivated) {
        playerGrow();
      }
    }

    if (star.y > canvas.height) {
      console.log("oh no");
      if (!wishActivated) {
        playerFade();
      }
    }
  });

  //get rid of stars that leave canvas
  stars = stars.filter(function(star) {
    if (star.y <= canvas.height && !star.isCatched) {
      return true;
    }
    return false;
  });
  callStar(number);
}

function callStar(number) {
  if (counter % number == 0) createStar();
}

function playerFade() {
  if (player.opacity > 0.1) {
    player.opacity -= 0.2;
  } else {
    player.opacity = 0;
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
  ctx.font = "30px Courier New";
  ctx.fillStyle = "white";
  ctx.fillText("Points: " + points, 575, 50);
}

function createStar() {
  var randomX = Math.floor(Math.random() * canvas.width);
  stars.push(new Star(starDrop, randomX, 0, 20, 20));
}

function showWishButton() {
  console.log("wish button check");
  if (
    points % (3 + Math.floor(Math.random() * 10 + 1)) === 0 &&
    player.opacity === 1 &&
    wishActivated === false
  ) {
    wishButton.style.display = "block";
  }
}

wishButton.onclick = function wishButton() {
  wishActivated = true;
  setTimeout(function() {
    toggleWish();
  }, 10000);

  this.style.display = "none";

  clearInterval(gameInterval);

  wishInterval = setInterval(function() {
    update(1);
    drawEverything();
  }, 1000 / 60);

  spriteInterval = setInterval(function() {
    player.opacity = 1;
  }, 1000 / 60);

  //create another setInterval and setTimeout function for player opacity

  setTimeout(() => {
    clearInterval(wishInterval);
    console.log("stop wishing");
    startGame();
  }, 5000);

  setTimeout(() => {
    clearInterval(spriteInterval);
    console.log("stop fading");
  }, 8000);
};

//sprite: https://www.deviantart.com/uluri/art/Kindling-Pixel-Run-Sprite-657784375

function toggleWish() {
  if (!wishActivated) {
    wishActivated = true;
  } else if (wishActivated) {
    wishActivated = false;
  }
}
