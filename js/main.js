const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


 /* Initializing the game
 let lola = new Dog(10, 10, 50, 50);
 let animationID = null;
 let gameOver = false;
 let objects = [];
 let cars = [];
 let carFrequency = 0; */
 let currentGame;
 let testObst = new Obstacle(100, 100, 50, 50, "red");
 //let testRoad = new Road(500, 64);
//  let testCar = new Car(250, 304, 64, 32, "blue");

 function startGame() {
  //Instantiate new game
  currentGame = new Game();
  //Instantiate new dog & other objects here
  let selectedDog = new Dog(canvas.width - 64, canvas.height - 256, 55, 35);
  currentGame.lola = selectedDog;
  currentGame.createCar(250, 304, 64, 32, "blue");
  currentGame.createCar(600, 304, 48, 32, "green");
  currentGame.createCar(900, 304, 64, 32, "red");
  // currentGame.cars.push(testCar);
 
  // currentGame.objects.push(selectedDog, testObst, testRoad, testCar); 
  currentGame.objects.push(selectedDog, testObst);  
  cancelAnimationFrame(currentGame.animationId);
  updateEverything();
}

window.addEventListener('load', (event) => {
  startGame();
  });
 
/* drop testing stuff here*/



/* Main Canvas functions here */


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

function updateEverything() {
// First check if all assets are loaded 

  if (!checkAssetsLoaded()) {
  ctx.fillStyle = "black";
  ctx.font = "20px Georgia";
  ctx.fillText("LOADING ASSETS", 50, 200);
  currentGame.animationID = requestAnimationFrame(updateEverything);
 } else {

// If they are, proceed to the game loop

  clearCanvas();
  drawMap();
  testObst.drawObstacle();
  // testRoad.drawObstacle();
  currentGame.lola.drawDog();
     
   /*
   
   Isto abaixo gera um array cada vez maior. Pode ser fonte de problemas? - solução possivel - fazer um splice

   carFrequency++;
if (carFrequency % 200 === 1) {
  createCar();
}

*/

/* need to make car loop properly. look into cars class */

currentGame.cars.forEach((car) => {
      if (car.x - car.width > 0) {
      car.moveLeft();
      car.drawCar();
    } else {
      car.x = canvas.width;
    }
    currentGame.gameOver = detectCollision(currentGame.lola,car);
    });

   if (!currentGame.gameOver) {
    currentGame.animationID = requestAnimationFrame(updateEverything);
  } else {
    cancelAnimationFrame(currentGame.animationID);
    clearCanvas();
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText("Oh noes! Game Over!", 50, 200);
  }
}
 }

  document.addEventListener("keydown", (keyboardEvent) => {
    currentGame.lola.move(keyboardEvent.key);
    });

 