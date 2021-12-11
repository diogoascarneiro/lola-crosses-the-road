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
  let selectedDog = new Dog( 64, canvas.height - 256, 55, 35);
  let goal = new Goal(320, 160, 64, 48);
  let timer = new Chronometer();
  currentGame.timer = timer;
  currentGame.lola = selectedDog;
  currentGame.goal = goal;
  currentGame.objects.push(currentGame.lola, currentGame.goal);  
  //Get some cars going
  createCar(250, 304, 64, 32, "blue");
  createCar(600, 304, 48, 32, "green");
  createCar(900, 304, 64, 32, "red");
  
  //Then create some people
   currentGame.obstacles.push(
     new Person("male1", 40, 40, 0.7, 0.7, "down"),
     new Person("male1", canvas.width - 40, 40, 0.7, 0.7, "down"),
     new Person("male1", 40, canvas.height - 80, 0.7, 0.7, "down")
     );
    
   // And some static obstacles

   currentGame.obstacles.push(
    new Tree("bigTree", 90, 160, 2, 2),
    new Tree("smallTree", 500, 500, 2, 2),
    new Tree("bigTree", 650, 700, 2, 2),
   );

 

  /* Register obstacles, reset the animation frame, start the timer, start the game */
  currentGame.obstacles.forEach(obst => obst.register());
  cancelAnimationFrame(currentGame.animationId);
  currentGame.timer.start(printTime);
  updateEverything();
}

window.addEventListener('load', (event) => {
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
  };

  });
 
/* Main Canvas functions here */


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

function updateEverything() {
  clearCanvas();
  drawMap();
  currentGame.goal.drawGoal();
  currentGame.lola.drawDog();
      
   /*
   
   Isto abaixo gera um array cada vez maior. Pode ser fonte de problemas? - solução possivel - fazer um splice

   carFrequency++;
if (carFrequency % 200 === 1) {
  createCar();
}

*/
  currentGame.peopleSpeed++;
  if (currentGame.peopleSpeed % 50 === 1) {
  currentGame.people.forEach(person => {
    person.moveRandom();
  })
  }

/* need to make car loop properly. look into cars class */

currentGame.cars.forEach((car) => {
      if (car.x - car.width > 0) {
      car.moveLeft();
      car.drawCar();
    } else {
      car.x = canvas.width;
    }
    if (detectCollision(currentGame.lola, car)) {
      currentGame.gameOver = true}
    });

  // CHECK FOR GAME OVERS AND GAME WINS - fazer funções para isto para simplificar codigo

   if (!currentGame.gameOver && !currentGame.wonGame) {
    currentGame.animationID = requestAnimationFrame(updateEverything);
  } else {
    cancelAnimationFrame(currentGame.animationID);
    clearCanvas();
    if (currentGame.gameOver) {
      readyToPlay = true;
      ctx.fillStyle = "black";
      ctx.font = "20px Georgia";
      ctx.fillText("Oh noes! Game Over!", 50, 200);
      ctx.fillText("PRESS ENTER TO PLAY AGAIN", 50, 400);
      currentGame.timer.stop()
      currentGame.timer.reset();
      } else if (currentGame.wonGame) {
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
    
  }

}
 

  document.addEventListener("keydown", (keyboardEvent) => {
    if (readyToPlay === true && keyboardEvent.key === "Enter") {
      readyToPlay === false;
      startGame();
    }
    currentGame.lola.move(keyboardEvent.key);
    });

 