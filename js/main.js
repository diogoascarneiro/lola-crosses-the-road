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
  
  //Create some people
  currentGame.obstacles.push(
    //Top
    new Person("male1", 40, 40, 0.7, 0.7, "down"),
    new Person("female1", canvas.width - 40, 40, 0.7, 0.7, "down"),
    new Person("male3", canvas.width - 40, 80, 0.7, 0.7, "down"),
    //Mid-Top
    new Person("male2", 40, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    new Person("male1", canvas.width - 40, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    new Person("female1", canvas.width - 500, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    //Mid-Bottom
    new Person("female1", 40, currentGame.goal.y + (160 * 4), 0.7, 0.7, "down"),
    new Person("male1", canvas.width - 40, currentGame.goal.y + (160 * 4), 0.7, 0.7, "down"),
    new Person("male2", canvas.width - 500, currentGame.goal.y + (160 * 4), 0.7, 0.7, "down"),
    //Bottom
    //new Person("male1", 40, canvas.height - 64, 0.7, 0.7, "down"),
    new Person("male3", canvas.width - 40, canvas.height - 64, 0.7, 0.7, "down"),
    new Person("male2", canvas.width - 500, canvas.height - 64, 0.7, 0.7, "down")
  );

  // And some static obstacles

  currentGame.obstacles.push(
    new Tree("bigTree", currentGame.goal.x - 64, currentGame.goal.y, 2, 2),
    new Tree("smallTree", 0, canvas.height - 96, 2, 2),
    //new Tree("bigTree", 650, 700, 2, 2)
  );

  // Can't forget the roads
  createRoad(currentGame.goal.y + 160, 2);
  createRoad(currentGame.goal.y + (160 * 2.60), 3);
  createRoad(currentGame.goal.y + (160 * 4.25), 2);

  //Get some cars going
  // Top road
  createCar(250, currentGame.goal.y + 160, 64, 32, "blue");
  createCar(600, currentGame.goal.y + 160, 48, 32, "green");
  createCar(900, currentGame.goal.y + 160, 64, 32, "red");

  // Mid road
  createCar(125, currentGame.goal.y + (160 * 2.60), 64, 32, "blue");
  createCar(800, currentGame.goal.y + (160 * 2.60), 48, 32, "green");
  createCar(375, currentGame.goal.y + (160 * 2.60), 64, 32, "red");

  // Bottom road
  createCar(0, currentGame.goal.y + (160 * 4.25), 64, 32, "blue");
  createCar(1000, currentGame.goal.y + (160 * 4.25), 48, 32, "green");
  createCar(500, currentGame.goal.y + (160 * 4.25), 64, 32, "red");

  /* Register obstacles, reset the animation frame, start the timer, start the game */
  currentGame.obstacles.forEach((obst) => obst.register());
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
  ctx.font = "20px Georgia";
  ctx.fillText("Oh noes! Game Over!", 50, 200);
  ctx.fillText("PRESS ENTER TO PLAY AGAIN", 50, 400);
  currentGame.timer.stop();
  currentGame.timer.reset();
}

function aWinnerIsYou() {
  readyToPlay = true;
  ctx.fillStyle = "black";
  ctx.font = "20px Georgia";
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
    if (car.x > 0) {
      car.moveLeft();
      car.drawCar();
    } else {
      car.x = canvas.width;
    }
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
