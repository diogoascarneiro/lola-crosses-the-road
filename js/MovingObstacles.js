/* MOVING OBSTACLES HERE */

class MovingObstacle extends Obstacle {
  constructor(
    x,
    y,
    width,
    height,
    type,
    widthMultiplier,
    heightMultiplier,
    direction
  ) {
    super();
    this.x = x;
    this.y = y;
    this.dx = 4;
    this.dy = 4;
    this.width = width;
    this.height = height;
    this.type = type;
    this.widthMultiplier = widthMultiplier;
    this.heightMultiplier = heightMultiplier;
    this.direction = direction;
  }

  moveLeft() {
    this.direction = "left";
    if (this.x > 0) {
      this.x -= this.dx;
    }
  }
  moveRight() {
    this.direction = "right";
    if (this.x < canvas.width - this.width) {
      this.x += this.dx;
    }
  }

  moveUp() {
    this.direction = "up";
    if (this.y > 0) {
      this.y -= this.dy;
    }
  }
  moveDown() {
    this.direction = "down";
    if (this.y < canvas.height) {
      this.y += this.dy;
    }
  }
}

/* CAR CLASS */
class Car extends MovingObstacle {
  // constructor(...args){
  //   super();
  // }
  drawCar() {
    let spriteSX = 0;
    let spriteSY = 0;
    switch (this.type) {
      case "blue":
        cityTileset.frameWidth = this.width;
        cityTileset.frameHeight = this.height;
        cityTileset.column = 4.5;
        cityTileset.row = 8;
        spriteSX = cityTileset.column * cityTileset.frameWidth;
        spriteSY = cityTileset.row * cityTileset.frameHeight;
        ctx.drawImage(
          cityTileset,
          spriteSX,
          spriteSY,
          cityTileset.frameWidth,
          cityTileset.frameHeight,
          this.x,
          this.y,
          cityTileset.frameWidth * 1.5,
          cityTileset.frameHeight * 1.5
        );
        break;
      case "green":
        cityTileset.frameWidth = this.width;
        cityTileset.frameHeight = this.height;
        cityTileset.column = 5;
        cityTileset.row = 8;
        spriteSX = cityTileset.column * cityTileset.frameWidth;
        spriteSY = cityTileset.row * cityTileset.frameHeight;
        ctx.drawImage(
          cityTileset,
          spriteSX,
          spriteSY,
          cityTileset.frameWidth,
          cityTileset.frameHeight,
          this.x,
          this.y,
          cityTileset.frameWidth * 1.5,
          cityTileset.frameHeight * 1.5
        );
        break;
      case "red":
        cityTileset.frameWidth = this.width;
        cityTileset.frameHeight = this.height;
        cityTileset.column = 2.8;
        cityTileset.row = 8;
        spriteSX = cityTileset.column * cityTileset.frameWidth;
        spriteSY = cityTileset.row * cityTileset.frameHeight;
        ctx.drawImage(
          cityTileset,
          spriteSX,
          spriteSY,
          cityTileset.frameWidth,
          cityTileset.frameHeight,
          this.x,
          this.y,
          cityTileset.frameWidth * 1.5,
          cityTileset.frameHeight * 1.5
        );
        break;
    }
  }
}

function createCar(x, y, width, height, color, direction) {
  let newCar = new Car(x, y, width, height, color, direction);
  currentGame.cars.push(newCar);
  currentGame.objects.push(newCar);
}

/* PERSON CLASS */
class Person extends MovingObstacle {
  constructor(type, x, y, widthMultiplier, heightMultiplier, direction) {
    super();
    this.type = type;
    this.x = x;
    this.y = y;
    this.dx = 16;
    this.dy = 16;
    this.widthMultiplier = widthMultiplier;
    this.heightMultiplier = heightMultiplier;
    this.direction = direction;
  }

  register() {
    if (!currentGame.objects.includes(this)) {
      currentGame.objects.push(this);
    }
    if (!currentGame.people.includes(this)) {
      currentGame.people.push(this);
    }
  }

  moveUp() {
    this.direction = "up";
    if (this.y > 0) {
      this.y -= this.dy;
    }
    if (detectCollision(currentGame.lola, this)) {
      currentGame.lola.y -= currentGame.lola.dy;
    }
    if (hasCollided(this)) {
      this.y += this.dy + 1;
    }
  }
  moveDown() {
    this.direction = "down";
    if (this.y < canvas.height) {
      this.y += this.dy;
    }
    if (detectCollision(currentGame.lola, this)) {
      currentGame.lola.y += currentGame.lola.dy;
    }
    if (hasCollided(this)) {
      this.y -= this.dy + 1;
    }
  }

  moveLeft() {
    this.direction = "left";
    if (this.x > 0) {
      this.x -= this.dx;
    }
    if (detectCollision(currentGame.lola, this)) {
      currentGame.lola.x -= currentGame.lola.dx;
    }
    if (hasCollided(this)) {
      this.x += this.dx + 1;
    }
  }
  moveRight() {
    this.direction = "right";
    if (this.x < canvas.width - this.width) {
      this.x += this.dx;
    }
    if (detectCollision(currentGame.lola, this)) {
      currentGame.lola.x += currentGame.lola.dx;
    }
    if (hasCollided(this)) {
      this.x -= this.dx + 1;
    }
  }

  moveRandom() {
    let randomDir = getRandomInt(4);
    switch (randomDir) {
      case 0:
        this.moveUp();
        break;
      case 1:
        this.moveDown();
        break;
      case 2:
        this.moveLeft();
        break;
      case 3:
        this.moveRight();
        break;
    }
  }

  drawObstacle() {
    switch (this.type) {
      case "male1":
        this.width = peopleSet1.male1.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.male1.frameHeight * this.heightMultiplier;
        // this.moveRandom();
        switch (this.direction) {
          // experimentar com case (this.direction)
          case "up":
            simpleDraw(
              peopleSet1,
              "male1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "up"
            );
            break;
          case "down":
            simpleDraw(
              peopleSet1,
              "male1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "down"
            );
            break;
          case "left":
            simpleDraw(
              peopleSet1,
              "male1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "left"
            );
            break;
          case "right":
            simpleDraw(
              peopleSet1,
              "male1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "right"
            );
            break;
        }
        break;
      case "male2":
        this.width = peopleSet1.male2.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.male2.frameHeight * this.heightMultiplier;
        this.moveRandom();
        switch (this.direction) {
          case "up":
            simpleDraw(
              peopleSet1,
              "male2",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "up"
            );
            break;
          case "down":
            simpleDraw(
              peopleSet1,
              "male2",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "down"
            );
            break;
          case "left":
            simpleDraw(
              peopleSet1,
              "male2",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "left"
            );
            break;
          case "right":
            simpleDraw(
              peopleSet1,
              "male2",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "right"
            );
            break;
        }
        break;
      case "male3":
        this.width = peopleSet1.male3.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.male3.frameHeight * this.heightMultiplier;
        this.moveRandom();
        switch (this.direction) {
          case "up":
            simpleDraw(
              peopleSet1,
              "male3",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "up"
            );
            break;
          case "down":
            simpleDraw(
              peopleSet1,
              "male3",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "down"
            );
            break;
          case "left":
            simpleDraw(
              peopleSet1,
              "male3",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "left"
            );
            break;
          case "right":
            simpleDraw(
              peopleSet1,
              "male3",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "right"
            );
            break;
        }
        break;
      case "female1":
        this.width = peopleSet1.female1.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.female1.frameHeight * this.heightMultiplier;
        this.moveRandom();
        switch (this.direction) {
          case "up":
            simpleDraw(
              peopleSet1,
              "female1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "up"
            );
            break;
          case "down":
            simpleDraw(
              peopleSet1,
              "female1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "down"
            );
            break;
          case "left":
            simpleDraw(
              peopleSet1,
              "female1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "left"
            );
            break;
          case "right":
            simpleDraw(
              peopleSet1,
              "female1",
              this.x,
              this.y,
              this.widthMultiplier,
              this.heightMultiplier,
              "right"
            );
            break;
        }
        break;
    }
  }
}
