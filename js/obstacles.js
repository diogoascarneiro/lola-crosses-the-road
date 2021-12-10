/*
* Preciso de pensar aqui um bocado nos diferentes tipos de obstaculo. Estrada, pessoas (boas e más)?
*
*
*
*/

/* MAIN OBSTACLE CLASS */
class Obstacle {
    constructor(x, y, width, height, color, type) {
      this.x = x;
      this.y = y;
      this.dx = 4;
      this.dy = 4;
      this.width = width;
      this.height = height;
      this.color = color;
      this.type = type;
      }
  
    drawObstacle() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

 }

 class MovingObstacle extends Obstacle {

  moveLeft() {
    if (this.x > 0 ) {
      this.x -= this.dx;
       }
  }
  moveRight() {
    if (this.x < canvas.width - this.width ) {
      this.x += this.dx;
    }
  }
  
  moveUp() {
    if (this.y > 0 ) {
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

      drawRoad() {
        
      }
  }

  /* TREE CLASS */
  class Tree extends Obstacle {

  }

 /* CAR CLASS */
  class Car extends MovingObstacle {
      
    drawCar() {
      let spriteSX = 0;
      let spriteSY = 0;
     switch (this.color) {
      case 'blue':
        cityTileset.frameWidth = this.width;
        cityTileset.frameHeight = this.height;
        cityTileset.column = 4.5;
        cityTileset.row = 8;
        spriteSX = (cityTileset.column * cityTileset.frameWidth);
        spriteSY = (cityTileset.row * cityTileset.frameHeight);
        ctx.drawImage(cityTileset, spriteSX, spriteSY, cityTileset.frameWidth, cityTileset.frameHeight, this.x, this.y, cityTileset.frameWidth * 1.5, cityTileset.frameHeight * 1.5);
       break;
       case 'green':
        cityTileset.frameWidth = this.width;
        cityTileset.frameHeight = this.height;
        cityTileset.column = 5;
        cityTileset.row = 8;
        spriteSX = (cityTileset.column * cityTileset.frameWidth);
        spriteSY = (cityTileset.row * cityTileset.frameHeight);
        ctx.drawImage(cityTileset, spriteSX, spriteSY, cityTileset.frameWidth, cityTileset.frameHeight, this.x, this.y, cityTileset.frameWidth * 1.5, cityTileset.frameHeight * 1.5);
       break;
       case 'red':
        cityTileset.frameWidth = this.width;
        cityTileset.frameHeight = this.height;
        cityTileset.column = 2.8;
        cityTileset.row = 8;
        spriteSX = (cityTileset.column * cityTileset.frameWidth);
        spriteSY = (cityTileset.row * cityTileset.frameHeight);
        ctx.drawImage(cityTileset, spriteSX, spriteSY, cityTileset.frameWidth, cityTileset.frameHeight, this.x, this.y, cityTileset.frameWidth * 1.5, cityTileset.frameHeight * 1.5);
       break;
     }
    }

  }

/* PERSON CLASS */
class Person extends MovingObstacle { 
  
  moveLeft() {
    if (this.x > 0 ) {
      this.x -= this.dx;
       }
       if (hasCollided(this)) {
        this.x += this.dx +1;
      }
  }
  moveRight() {
    if (this.x < canvas.width - this.width ) {
      this.x += this.dx;
    }
    if (hasCollided(this)) {
      this.x -= this.dx +1;
    }
  }
  
  moveUp() {
    if (this.y > 0 ) {
      this.y -= this.dy;
    }
    
    if (hasCollided(this)) {
      this.y += this.dy +1;
    }
  }
  moveDown() {
    if (this.y < canvas.height) {
      this.y += this.dy;
    }
    if (hasCollided(this)) {
      this.y -= this.dy +1;
    }
  }

  drawPerson() {

    // switch (this.type) {
    //   case 'man':
       
    //   break;
    //   case 'woman':

    //   break;
    //  }

}
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
    for (let i = 0; i < currentGame.objects.length; i++) {
      if (entity === currentGame.objects[i]) {continue;}
       else if (detectCollision(entity, currentGame.objects[i]) === true) {
        collision = true; break;
      } else {collision = false;}
    }
    return collision
  }
  