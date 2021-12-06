const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

 /* Initializing the game */
 let lola = new Dog(10, 10, 50, 50);
 let animationID = null;
 let gameOver = false;


 /* drop testing stuff here*/
 let testObst = new Obstacle(100, 100, 50, 50);
 window.addEventListener('load', (event) => {
    testObst.drawObstacle();
    lola.drawDog();
  });
 



/* Main Canvas functions here */


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

function updateEverything() {
    clearCanvas();
    lola.drawDog();
    testObst.drawObstacle();
    
   if (!gameOver) {
    animationID = requestAnimationFrame(updateEverything);
  } else {
    cancelAnimationFrame(animationID);
    clearCanvas();
    ctx.fillStyle = "white";
    ctx.font = "20px Georgia";
    ctx.fillText("Oh noes! Game Over!", 50, 200);
  }
}

  document.addEventListener("keydown", (keyboardEvent) => {
    lola.move(keyboardEvent.key);
    updateEverything();
  });

 