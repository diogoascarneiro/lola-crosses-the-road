const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

 /* Initializing the game */
 let lola = new Dog(10, 10, 50, 50);
 let animationID = null;
 let gameOver = false;
 let cars = [];
 let carFrequency = 0;


 /* drop testing stuff here*/
 let testObst = new Obstacle(100, 100, 50, 50, "red");
 let testRoad = new Road(500, 50);
 let testCar = new Car(250, 525, 10, 10, "purple");
 cars.push(testCar);
 createCar();

 window.addEventListener('load', (event) => {
    updateEverything();
  });
 



/* Main Canvas functions here */


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

function updateEverything() {
    clearCanvas();
    lola.drawDog();
    testObst.drawObstacle();
    testRoad.drawObstacle();
     
   /*
   
   Isto abaixo gera um array cada vez maior. Pode ser fonte de problemas?

   carFrequency++;
if (carFrequency % 200 === 1) {
  createCar();
}

*/

    cars.forEach((car) => {
      if (car.x < canvas.width) {
      car.moveRight();
      car.drawObstacle();
    } else {
      car.x = 0;
    }

      gameOver = detectCollision(car);
    });

   if (!gameOver) {
    animationID = requestAnimationFrame(updateEverything);
  } else {
    cancelAnimationFrame(animationID);
    clearCanvas();
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText("Oh noes! Game Over!", 50, 200);
  }
}

  document.addEventListener("keydown", (keyboardEvent) => {
    lola.move(keyboardEvent.key);
    });

 