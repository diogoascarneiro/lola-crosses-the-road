/*
* Preciso de pensar aqui um bocado nos diferentes tipos de obstaculo. Estrada, pessoas (boas e más)?
*
*
*
*/

class Obstacle {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.dx = 4;
      this.dy = 4;
      this.width = width;
      this.height = height;
      this.color = color;
      }
  
    drawObstacle() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
 }

  class Road extends Obstacle {
    constructor(y, height) {
       super(0, y, canvas.width, height, "lightgray");
      }

  }

  class Car extends Obstacle {
  
 moveLeft() {
  if (this.x > 0) {
    this.x -= this.dx;
     }
}
moveRight() {
  if (this.x < canvas.width) {
    this.x += this.dx;
  } 
}

moveUp() {
 if (this.y > 0) {
   this.y -= this.dy;
    }
}
moveDown() {
  if (this.y < canvas.height) {
    this.y += this.dy;
  }
}
  }

  function createCar() {
    let newCar = new Car(0, 525, 10, 10, "purple");
    cars.push(newCar);
  }

  /*leaving it only for player vs obstacles for now but would like to to obstacle on obstacle in the future, maybe*/
  function detectCollision(obstacle) {
    let playerLeft = lola.x;
    let playerRight = lola.x + lola.width;
    let playerUp = lola.y;
    let playerDown = lola.y + lola.height;
  
    let obstLeft = obstacle.x;
    let obstRight = obstacle.x + obstacle.width;
    let obstUp = obstacle.y;
    let obstDown = obstacle.y + obstacle.height;
  
    //Check for all the intersections between the player and the obstacle
    if (
      playerDown < obstUp ||
      playerUp > obstDown ||
      playerLeft > obstRight ||
      playerRight < obstLeft
    ) {
      return false;
    } else {
      return true;
    }
  }