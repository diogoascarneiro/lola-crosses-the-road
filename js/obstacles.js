/*
* Preciso de pensar aqui um bocado nos diferentes tipos de obstaculo. Estrada, pessoas (boas e más)?
*
*
*
*/

/* MAIN OBSTACLE CLASS */
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

 /* ROAD CLASS */
  class Road extends Obstacle {
    constructor(y, height) {
       super(0, y, canvas.width, height, "lightgray");
      }
  }

 /* CAR CLASS */
  class Car extends Obstacle {
  constructor(color) {
    super();
    this.color = color;
   }
   
  //  drawCar() {

  //   switch (this.color) {
  //     case 'blue':

  //     break;
  //     case 'green':

  //     break;
  //     case 'red':

  //     break;
  //   }
  //  }

  }

  function createCar() {
    let newCar = new Car(0, 525, 10, 10, "purple");
    cars.push(newCar);
    objects.push(newCar);
  }

/* PERSON CLASS */
class Person extends Obstacle { 
  
}

  /* COLLISION DETECTION
  *  The function to call for collision detection should be hasCollided() and not detectCollision() */
  
  function detectCollision(entity, obstacle) {
    let entityLeft = entity.x;
    let entityRight = entity.x + entity.width;
    let entityUp = entity.y;
    let entityDown = entity.y + entity.height;
  
    let obstLeft = obstacle.x;
    let obstRight = obstacle.x + obstacle.width;
    let obstUp = obstacle.y;
    let obstDown = obstacle.y + obstacle.height;
  
    //Check for all the intersections between the player and the obstacle
    if (
      entityDown < obstUp ||
      entityUp > obstDown ||
      entityLeft > obstRight ||
      entityRight < obstLeft
    ) {
      return false;
    } else {
      return true;
    }
  }

  function hasCollided(entity) {
    let collision = null;
    for (let i = 0; i < objects.length; i++) {
      if (entity === objects[i]) {continue;}
       else if (detectCollision(entity, objects[i]) === true) {
        collision = true; break;
      } else {collision = false;}
    }
    return collision
  }
  