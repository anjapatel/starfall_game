var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");
var wishButton = document.getElementById("wish");
let wishActivated = false;
let textReveal = false;
var stars = [];
var points = 8;
var player;
var gameInterval;
var x;
var text = document.getElementById("text");
var textCounter = 0;
var counter = 0;
var opacity = 1;
var wishInterval;
var spriteInterval;
var spriteLeft = new Image();
var spriteRight = new Image();
var starDrop = new Image();

let rightArrowPressed = false;
let leftArrowPressed = false;

spriteRight.src = "./images/sprite-right.png";
spriteRight.src = "./images/sprite-left.png";
starDrop.src = "./images/star.png";
var starSound = new Audio("./sounds/bell.m4a");
var themeSound = new Audio("./sounds/theme.m4a");

window.onload = function() {
  player = new Character(spriteRight, 100, 100, 350, canvas.height - 100);
  stars.push(new Star(starDrop, 250, 0, 20, 20));
  themeSound.play();

  startGame();

  function keyDownHandler(e) {
    event.preventDefault();
    if (e.keyCode === 39) {
      rightArrowPressed = true;
      player.img.src = "./images/sprite-right.png";
    } else if (e.keyCode === 37) {
      leftArrowPressed = true;
      player.img.src = "./images/sprite-left.png";
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode === 39) {
      rightArrowPressed = false;
    } else if (e.keyCode === 37) {
      leftArrowPressed = false;
    }
  }

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

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
        points++;
        showWishButton();
        starSound.play();
        if (!wishActivated) {
          playerGrow();
        }
      }

      if (star.y > canvas.height) {
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
  }

  function playerGrow() {
    if (player.opacity < 1) {
      player.opacity += 0.2;
    } else {
      player.opacity = 1;
    }
  }

  function drawEverything() {
    player.movingAround();
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
    var randomX = Math.floor(Math.random() * 775);
    stars.push(new Star(starDrop, randomX, 0, 20, 20));
  }
  function showWishButton() {
    if (
      points % (3 + Math.floor(Math.random() * 10 + 1)) === 0 &&
      player.opacity === 1 &&
      wishActivated === false
    ) {
      wish.style.visibility = "visible";
      console.log("show button");
    }
  }

  wishButton.onclick = function wishButton() {
    wishActivated = true;
    writeMessage(randomComment[commentCounter]);
    setTimeout(function() {
      commentCounter++;
      message.innerHTML = " ";
    }, 8000);

    setTimeout(function() {
      toggleWish();
    }, 10000);

    this.style.visibility = "hidden";

    clearInterval(gameInterval);

    wishInterval = setInterval(function() {
      update(1);
      drawEverything();
    }, 1000 / 60);

    spriteInterval = setInterval(function() {
      player.opacity = 1;
    }, 1000 / 60);

    setTimeout(() => {
      clearInterval(wishInterval);
      startGame();
    }, 5000);

    setTimeout(() => {
      clearInterval(spriteInterval);
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
};

var message = document.getElementById("writing");
let commentCounter = 0;

// YOUR TEXTS GOES HERE
let randomComment = [
  "Starcat: I'm lost, can you help me find my way?",
  "Starcat: This looks familiar, but something is wrong.",
  "Starcat: I think I've been here before.",
  "Starcat: Once upon a time..."
];

function writeMessage(string) {
  var i = 0,
    intervalId;
  intervalId = window.setInterval(function() {
    message.innerHTML += string.charAt(i++);
    if (i > string.length) window.clearInterval(intervalId);
  }, 100);
}
