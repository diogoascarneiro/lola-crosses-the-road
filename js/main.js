// Start by getting the canvas and setting the context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let currentGame;
let inGameStart = true;
let startStep = 0;
let inGameOver = false;
let gameOverStep = 0;
let readyToPlay = false;
let hiScores = [];

function startGame() {
  //Instantiate new game
  currentGame = new Game();
  //Instantiate key objects here
  let selectedDog = new Dog(64, canvas.height - 64, 55, 35);
  let goal = new Goal(canvas.width / 2 - 64, 0, 64, 48);
  let timer = new Chronometer();
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
  // First check if all assets are loaded
  // If they are, ask player to press enter to start, then proceed to the game loop
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
  inGameOver = true;
  gameOverStep = 0;
  currentGame.timer.stop();
  currentGame.timer.reset();
}

function aWinnerIsYou() {
  readyToPlay = true;
  ctx.fillStyle = "black";
  ctx.font = "20px Visitor";
  ctx.fillText("YA DID IT LOLA, YA CROSSED THE ROAD", 50, 200);
  ctx.fillText("PRESS ENTER TO PLAY AGAIN", 50, 400);
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
  
  

  currentGame.lola.move(keyboardEvent.key);
});
