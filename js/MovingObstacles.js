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
    this.dx = 3;
    this.dy = 3;
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
  
  moveLeft() {
    this.direction = "left";
    if (this.x > 0) {
      this.x -= this.dx;
    }
    currentGame.people.forEach(person => {
      if (detectCollision(this, person)) {
       person.rip();
      }
    });
  }
  moveRight() {
    this.direction = "right";
    if (this.x < canvas.width) {
      this.x += this.dx;
    }
    currentGame.people.forEach(person => {
      if (detectCollision(this, person)) {
       person.rip();
      }
    });
  }

  moveUp() {
    this.direction = "up";
    if (this.y > 0) {
      this.y -= this.dy;
    }
    currentGame.people.forEach(person => {
      if (detectCollision(this, person)) {
       person.rip();
      }
    });
  }
  moveDown() {
    this.direction = "down";
    if (this.y < canvas.height) {
      this.y += this.dy;
    }
    currentGame.people.forEach(person => {
      if (detectCollision(this, person)) {
       person.rip();
      }
    });
  }
 
  drawCar() {
    switch (this.type) {
      default: simpleDraw(carSprites, this.type, this.x, this.y, 1.5, 1.5, this.direction);
    }
   }
}

function createCar(x, y, width, height, color, direction) {
  let newCar = new Car(x, y, width, height, color, 1.5, 1.5, direction);
  currentGame.cars.push(newCar);
  currentGame.objects.push(newCar);
}

function moveCars() {
  currentGame.cars.forEach((car) => {
   
   if (car.direction === "right") { 
     if (car.x < canvas.width) {
     car.moveRight();
     } else {
     car.x = 0;
   }
 }
if (car.direction === "left") { 
  if (car.x > 0) {
  car.moveLeft();
  } else {
  car.x = canvas.width;
}
}
    car.drawCar();
    if (detectCollision(currentGame.lola, car)) {
      currentGame.gameOver = true;
    }
  });

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

  rip() {
    let i = currentGame.people.indexOf(this);
    currentGame.people.splice(i, 1);
    let j = currentGame.objects.indexOf(this);
    currentGame.objects.splice(j, 1);
    let k = currentGame.obstacles.indexOf(this);
    currentGame.obstacles.splice(k, 1);
    screamMale.play();
  }

  moveUp() {
    this.direction = "up";

    activePeopleFrame++;
    if (activePeopleFrame >= 2) {
      activePeopleFrame = 0
    }
    switch (this.type) {
      default: peopleSet1[`${this.type}`].up.spriteSX = peopleSet1[`${this.type}`].up.spriteSX + (activePeopleFrame * 48);
    }

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

    activePeopleFrame++;
    if (activePeopleFrame >= 2) {
      activePeopleFrame = 0
    }

    switch (this.type) {
      default: peopleSet1[`${this.type}`].down.spriteSX = peopleSet1[`${this.type}`].up.spriteSX + (activePeopleFrame * 48);
    }

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

    activePeopleFrame++;
    if (activePeopleFrame >= 2) {
      activePeopleFrame = 0
    }
    switch (this.type) {
      default: peopleSet1[`${this.type}`].left.spriteSX = peopleSet1[`${this.type}`].up.spriteSX + (activePeopleFrame * 48);
    }

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

    activePeopleFrame++;
    if (activePeopleFrame >= 2) {
      activePeopleFrame = 0
    }
    switch (this.type) {
      default: peopleSet1[`${this.type}`].right.spriteSX = peopleSet1[`${this.type}`].up.spriteSX + (activePeopleFrame * 48);
    }

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
 // this could be simpler (just one case - like I did somewhere else in the code)
  drawObstacle() {
    switch (this.type) {
      case "male1":
        this.width = peopleSet1.male1.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.male1.frameHeight * this.heightMultiplier;
        simpleDraw(peopleSet1, this.type, this.x, this.y, this.widthMultiplier, this.heightMultiplier, this.direction);
        break;
      case "male2":
        this.width = peopleSet1.male2.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.male2.frameHeight * this.heightMultiplier;
        simpleDraw(peopleSet1, this.type, this.x, this.y, this.widthMultiplier, this.heightMultiplier, this.direction);
        break;
      case "male3":
        this.width = peopleSet1.male3.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.male3.frameHeight * this.heightMultiplier;
        simpleDraw(peopleSet1, this.type, this.x, this.y, this.widthMultiplier, this.heightMultiplier, this.direction);
        break;
      case "female1":
        this.width = peopleSet1.female1.frameWidth * this.widthMultiplier;
        this.height = peopleSet1.female1.frameHeight * this.heightMultiplier;
        simpleDraw(peopleSet1, this.type, this.x, this.y, this.widthMultiplier, this.heightMultiplier, this.direction);
        break;
    }
  }
}

function movePeople() {
  currentGame.peopleSpeed++;
  if (currentGame.peopleSpeed % 50 === 1) {
    currentGame.people.forEach((person) => {
      person.moveRandom();
    });
  }
}