// Start by getting the canvas and setting the context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// I made the canvas too big (insert the price is right losing sound here)
// so now I have to check for different screen sizes and zoom out accordingly

function adjustZoom() {
let screenHeight = window.screen.height;

switch (screenHeight) {
  case 1080: document.body.style.zoom = 1; break;
  case 720: document.body.style.zoom = 0.63; break;
}
}
// document.body.style.zoom = 0.5;

let currentGame;
let inGameStart = true;
let startStep = 0;
let inGameOver = false;
let gameOverStep = 0;
let inGameWin = false;
let gameWinStep = 0;
let inGame = false;
let readyToPlay = false;
let hiScores = [];

function startGame() {
  //Instantiate new game
  currentGame = new Game();
  //Instantiate key objects here
  let selectedDog = new Dog(64, canvas.height - 64, 55, 35);
  let goal = new Goal(canvas.width / 2 - 64, 0, 64, 48);
  let timer = new Chronometer();
  inGame = true;
  currentGame.timer = timer;
  currentGame.lola = selectedDog;
  currentGame.goal = goal;
  currentGame.objects.push(currentGame.lola, currentGame.goal);
  // start level 1
  currentGame.level1();
  /* reset the animation frame, start the timer, start the game */
  cancelAnimationFrame(currentGame.animationId);
  currentGame.timer.start(printTime);
  themeMusic.play();
  updateEverything();
}

window.addEventListener("load", (event) => {
  // First adjust the zoom, then check if all assets are loaded
  // If they are, ask player to press enter to start, then proceed to the game loop
  adjustZoom();
  if (!checkAssetsLoaded()) {
    clearCanvas();
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText("LOADING ASSETS", 50, 200);
    currentGame.animationID = requestAnimationFrame(updateEverything);
  } else {
    readyToPlay = true;
    clearCanvas();
    ctx.drawImage(startScreen1, 0, 0);
    }
});

/* Main Canvas functions here */

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameOver() {
  readyToPlay = true;
  ctx.drawImage(gameOverScreen1, 0, 0);
  awoo.play();
  inGameOver = true;
  gameOverStep = 0;
  themeMusic.pause();
  currentGame.timer.stop();
  currentGame.timer.reset();
}

function aWinnerIsYou() {
  readyToPlay = true;
  inGameWin = true;
  ctx.drawImage(gameWinScreen1, 0, 0);
  currentGame.timer.stop();
  hiScores.push(currentGame.timer.split());
  clearHiScores();
  sortHiScores(hiScores);
  printHiScores(hiScores);
}

/* Here comes the main one */
function updateEverything() {
  //Draw & move everything
  clearCanvas();
  drawMap();
  currentGame.goal.drawGoal();
  currentGame.lola.drawDog();
  movePeople();
  moveCars();
  drawBuildings();
  // CHECK FOR GAME OVERS AND GAME WINS
  if (!currentGame.gameOver && !currentGame.wonGame) {
    currentGame.animationID = requestAnimationFrame(updateEverything);
  } else {
    cancelAnimationFrame(currentGame.animationID);
    clearCanvas();
    if (currentGame.gameOver) {
      gameOver();
    } else if (currentGame.wonGame) {
      aWinnerIsYou();
    }
  }
}

document.addEventListener("keydown", (keyboardEvent) => {
  if (inGameStart) {
    if (startStep === 0 && keyboardEvent.key === "Enter") {ctx.drawImage(startScreen2, 0, 0); startStep = 1;}
    else if (startStep === 1 && readyToPlay === true && keyboardEvent.key === "Enter") {
      readyToPlay = false;
      startStep = 0;
      inGameStart = false;
      startGame();
    }
  }
  if (inGameOver) {
    if (gameOverStep === 0 && keyboardEvent.key === "Enter") {ctx.drawImage(gameOverScreen2, 0, 0); gameOverStep = 1;}
    else if (gameOverStep === 1 && readyToPlay === true && keyboardEvent.key === "Enter") {
      readyToPlay = false;
      gameOverStep = 0;
      inGameOver = false;
      startGame();
    }
  }
  if (inGameWin) {
    if (gameWinStep === 0 && keyboardEvent.key === "Enter") {ctx.drawImage(gameWinScreen2, 0, 0); gameWinStep = 1;}
    else if (gameWinStep === 1 && readyToPlay === true && keyboardEvent.key === "Enter") {
      readyToPlay = false;
      gameWinStep = 0;
      inGameWin = false;
      startGame();
    }
  }
  if (inGame) {currentGame.lola.move(keyboardEvent.key);}
});
