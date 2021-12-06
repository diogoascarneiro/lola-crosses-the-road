class Obstacle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.dx = 4;
      this.dy = 4;
      this.width = width;
      this.height = height;
      }
  
    drawObstacle() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    moveLeft() {
        this.x -= this.dx;
      }
      moveRight() {
        this.x += this.dx;
      }
      moveUp() {
        this.y -= this.dy;
      }
      moveDown() {
        this.y += this.dy;
      }

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