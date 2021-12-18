class Dog {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.dx = 8;
    this.dy = 8;
    this.width = width;
    this.height = height;
    this.direction = "right";
    //this.activeFrame = 0;
  }

  /* Movement method. */

  move(key) {
    switch (key) {
      case "ArrowUp":
        if (this.direction === "left") {
          this.animWalkLeft();
        } else if (this.direction === "right") {
          this.animWalkRight();
        }
        if (this.y > 0) {
          this.y -= this.dy;
        }
        if (currentGame.goal.checkIfWon()) {
          currentGame.wonGame = true;
        }
        if (hasCollided(this)) {
          this.y += this.dy + 1;
        }
        break;
      case "ArrowDown":
        if (this.direction === "left") {
          this.animWalkLeft();
        } else if (this.direction === "right") {
          this.animWalkRight();
        }
        if (this.y < canvas.height) {
          this.y += this.dy;
        }
        if (currentGame.goal.checkIfWon()) {
          currentGame.wonGame = true;
        }
        if (hasCollided(this)) {
          this.y -= this.dy + 1;
        }
        break;
      case "ArrowLeft":
        this.animWalkLeft();
        if (this.x > 0) {
          this.x -= this.dx;
        }
        if (currentGame.goal.checkIfWon()) {
          currentGame.wonGame = true;
        }
        if (hasCollided(this)) {
          this.x += this.dx + 1;
        }
        break;
      case "ArrowRight":
        this.animWalkRight();
        if (this.x < canvas.width - this.width) {
          this.x += this.dx;
        }
        if (currentGame.goal.checkIfWon()) {
          currentGame.wonGame = true;
        }
        if (hasCollided(this)) {
          this.x -= this.dx + 1;
        }
        break;
    }
  }

  animWalkLeft() {
    this.direction = "left";
    activeDogFrame++;
    if (activeDogFrame >= 7) {
      activeDogFrame = 0;
    }
    lolaWalking.walking.left = {
      spriteSX: 0 + activeDogFrame * 64,
      spriteSY: 0,
    };
  }

  animWalkRight() {
    this.direction = "right";
    activeDogFrame++;
    if (activeDogFrame >= 7) {
      activeDogFrame = 0;
    }
    lolaWalking.walking.right = {
      spriteSX: 0 + activeDogFrame * 64,
      spriteSY: 32,
    };
  }

  /* drawing animations starts here */
  drawDog() {
    switch (this.direction) {
      default:
        simpleDraw(
          lolaWalking,
          "walking",
          this.x,
          this.y,
          1,
          1,
          this.direction
        );
    }
  }
}
