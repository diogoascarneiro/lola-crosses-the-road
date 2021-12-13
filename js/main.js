// Start by getting the canvas and setting the context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let currentGame;
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

  currentGame.level1();
  /* Register obstacles, reset the animation frame, start the timer, start the game */
  
  cancelAnimationFrame(currentGame.animationId);
  currentGame.timer.start(printTime);
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
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText("PRESS ENTER TO START", 50, 200);
  }
});

/* Main Canvas functions here */

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameOver() {
  readyToPlay = true;
  ctx.fillStyle = "black";
  ctx.font = "20px Visitor";
  ctx.fillText("Oh noes! Game Over!", 50, 200);
  ctx.fillText("PRESS ENTER TO PLAY AGAIN", 50, 400);
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

function moveCars() {
  currentGame.cars.forEach((car) => {
   
   if (car.direction === "right") { 
     if (car.x < canvas.width) {
     car.moveRight();
     } else {
     car.x = 0;
   }
 }
if (car.direction === "left") { 
  if (car.x > 0) {
  car.moveLeft();
  } else {
  car.x = canvas.width;
}
}
    car.drawCar();
    if (detectCollision(currentGame.lola, car)) {
      currentGame.gameOver = true;
    }
  });

  /* Isto abaixo gera um array cada vez maior. Pode ser fonte de problemas? - solução possivel - fazer um splice
   carFrequency++;
if (carFrequency % 200 === 1) {
  createCar();
} 
*/
}

function movePeople() {
  currentGame.peopleSpeed++;
  if (currentGame.peopleSpeed % 50 === 1) {
    currentGame.people.forEach((person) => {
      person.moveRandom();
    });
  }
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
  if (readyToPlay === true && keyboardEvent.key === "Enter") {
    readyToPlay === false;
    startGame();
  }
  currentGame.lola.move(keyboardEvent.key);
});
