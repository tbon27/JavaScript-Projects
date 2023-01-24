var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var ballSpeed;
// Paddle stuff
var paddleHeight = 10;
var paddleWidth = 90;
var paddleX = (canvas.width - paddleWidth) / 2;
// User Input
var rightPressed = false;
var leftPressed = false;
// Brick stuff
var brickRowCount = 2;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

// Create Array of bricks
var bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {x: 0, y: 0, status: 1};
  }
}

var score = 0;
var lives = 1;
//let paused = false;
let gameOver = false;
var gameIsRunning = false;
var isPaused = false;
let myReq;
document.getElementById("myCanvas").style.cursor = "ew-resize";
document.addEventListener("keydown", pauseKeyDownHandler, false);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("keydown", startKeyDownHandler, false);

// Timer
let [milliseconds, seconds, minutes] = [0, 0, 0];
setInterval(displayTimer, 10);
function displayTimer() {
  milliseconds += 10;
  //console.log(hours + ":" + minutes + ":" + seconds + ":" + milliseconds);
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }
}
function drawTimer() {
  ctx.font = "14px Trebuchet MS";
  ctx.fillStyle = "white";
  ctx.fillText(
    `TIME: ${minutes} : ${seconds} : ${milliseconds}`,
    canvas.width / 2,
    20
  );
}

// Ball Speedometer
function drawSpeed() {
  ctx.font = "14px Trebuchet MS";
  ctx.fillStyle = "white";
  ctx.fillText(`Ball Speed: ${ballSpeed - 3}x`, 95, 20);
}
// Bricks
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "rgb(220,100,80)";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
// Ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "rgb(180,250,120)";
  ctx.fill();
  ctx.closePath();
}
// Paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "rgb(170,250,10)";
  ctx.fill();
  ctx.closePath();
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            //drawCongrats();
            alert("Well done. Click OK to restart...");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = "14px Trebuchet MS";
  ctx.fillStyle = "lightyellow";
  ctx.fillText(`SCORE: ${score}`, 8, 20);
}
function drawLives() {
  ctx.font = "bold 16px Trebuchet MS";
  ctx.fillStyle = "lightgreen";
  ctx.fillText(`LIVES: ${lives}`, canvas.width - 65, 20);
}

// DRAW
function draw() {
  gameIsRunning = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  drawTimer();
  drawSpeed();
  collisionDetection();
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      if (dy > 0) {
        dy += 0.5;
      } else dy -= 0.5;

      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        gameOver = true;
        gameIsRunning = false;
        gameIsOver();
        // alert("GAME OVER!");
        // document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
  // User input
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth / 2);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, -(paddleWidth / 2));
  }
  x += dx;
  y += dy;
  ballSpeed = Math.abs(dx.toFixed(2)) + Math.abs(dy.toFixed(2));
  ballSpeed = ballSpeed.toFixed(2);
  myReq = window.requestAnimationFrame(draw);
}

// Pause
function pauseKeyDownHandler(e) {
  if (e.key === "p" && isPaused === false) {
    showPauseUI();
  }
  if (!myReq && e.key === "m" && isPaused === true) {
    isPaused = false;
    myReq = window.requestAnimationFrame(draw);
  }
}

function showPauseUI() {
  isPaused = true;
  myReq = window.cancelAnimationFrame(myReq);

  ctx.rect(30, 30, canvas.width * 0.88, canvas.height * 0.8);
  ctx.fillStyle = "lightblue";
  ctx.fill();
  ctx.closePath();

  ctx.font = "bold 26px Trebuchet MS";
  ctx.fillStyle = "black";
  ctx.fillText("PAUSED!", canvas.width / 2 - 50, 80);

  ctx.font = "bold 16px Trebuchet MS";
  ctx.fillStyle = "black";
  ctx.fillText("Press the 'm' key to continue playing...", 80, 110);
}

function showStartUI() {
  ctx.rect(30, 30, canvas.width * 0.88, canvas.height * 0.8);
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  ctx.closePath();

  ctx.font = "bold 26px Trebuchet MS";
  ctx.fillStyle = "black";
  ctx.fillText("Breakout JS!", canvas.width / 2 - 70, 80);

  ctx.font = "bold 16px Trebuchet MS";
  ctx.fillStyle = "black";
  ctx.fillText("-->Press the 'n' key to start playing...", 80, 110);
}

function pauseButton() {
  if (myReq) {
    showPauseUI();
  } else if (!myReq) {
    myReq = window.requestAnimationFrame(draw);
  }
}

// function restartKeyDownHandler(e){
//     if(gameOver === true && e.key === "y"){
//     document.location.reload();
//     }
// }

function gameIsOver() {
  if (gameOver === true) {
    console.log(gameOver);
  }
}

//*** Actually call the function(s)
// START game
showStartUI();

function startKeyDownHandler(e) {
  if (e.key === "n" && gameIsRunning === false) {
    draw();
  }
}

//draw();
