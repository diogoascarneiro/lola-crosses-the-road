class Game {
  constructor() {
    this.lola = {};
    this.animationID = null;
    this.gameOver = false;
    this.objects = [];
    this.obstacles = [];
    this.cars = [];
    this.carFrequency = 0;
    this.wonGame = false;
    this.people = [];
    this.peopleSpeed = 0;
    this.crosswalks = [];
    this.buildings = [];
  }

  level1() {

    //Create some people
  this.obstacles.push(
    //Top
    new Person("male1", 80, 80, 0.7, 0.7, "down"),
    new Person("female1", canvas.width - 40, 40, 0.7, 0.7, "down"),
    new Person("male3", canvas.width - 40, 80, 0.7, 0.7, "down"),
    //Mid-Top
    new Person("male2", 40, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    new Person("male1", canvas.width - 40, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    new Person("female1", canvas.width - 500, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    //Mid-Bottom
    new Person("female1", 300, currentGame.goal.y + (160 * 3.8), 0.7, 0.7, "down"),
    new Person("male1", canvas.width - 40, currentGame.goal.y + (160 * 3.8), 0.7, 0.7, "down"),
    new Person("male2", canvas.width - 430, currentGame.goal.y + (160 * 3.8), 0.7, 0.7, "down"),
    //Bottom
    //new Person("male1", 40, canvas.height - 64, 0.7, 0.7, "down"),
    new Person("male3", canvas.width - 100, canvas.height - 64, 0.7, 0.7, "down"),
    new Person("male2", canvas.width - 500, canvas.height - 64, 0.7, 0.7, "down")
  );

  // And some static obstacles

  this.obstacles.push(
    //new Tree("bigTree", currentGame.goal.x - 64, currentGame.goal.y-32, 2, 2),
    new DecorObst("smallTree", currentGame.goal.x - 16, currentGame.goal.y + 4, 2, 2),
    new DecorObst("smallTree", currentGame.goal.x - 16, currentGame.goal.y + 32, 2, 2),
    new DecorObst("smallTree", currentGame.goal.x + 102, currentGame.goal.y + 4, 2, 2),
    new DecorObst("smallTree", currentGame.goal.x + 102, currentGame.goal.y + 32, 2, 2),
   // new DecorObst("bigTree", 0, canvas.height-96, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 80, canvas.height-96, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 80, 0, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 176, 0, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 272, 0, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 368, 0, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 128, 16, 1.5, 1.5),    
    new DecorObst("bigTree", canvas.width - 224, 16, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 320, 16, 1.5, 1.5),
    new DecorObst("bigTree", canvas.width - 416, 16, 1.5, 1.5),
  );

  // Can't forget the roads
  createRoad(this.goal.y + 160, 2);
  createRoad(this.goal.y + (160 * 2.60), 3);
  createRoad(this.goal.y + (160 * 4.25), 2);

  //Get some cars going
  // Top road
  createCar(250, this.goal.y + 160, 64, 32, "blue", "left");
  createCar(600, this.goal.y + 160, 48, 32, "green", "left");
  createCar(900, this.goal.y + 160, 64, 32, "red", "left");

  createCar(250, this.goal.y + 160 + 64, 64, 32, "blue", "right");
  createCar(600, this.goal.y + 160 + 64, 48, 32, "green", "right");
  createCar(900, this.goal.y + 160 + 64, 64, 32, "red", "right");

  // Mid road
  createCar(125, this.goal.y + (160 * 2.60), 64, 32, "blue", "left");
  createCar(800, this.goal.y + (160 * 2.60), 48, 32, "green", "left");
  createCar(375, this.goal.y + (160 * 2.60), 64, 32, "red", "left");

  createCar(125, this.goal.y + (160 * 2.60) + 64, 64, 32, "blue", "right");
  createCar(800, this.goal.y + (160 * 2.60) + 64, 48, 32, "green", "right");
  createCar(375, this.goal.y + (160 * 2.60) + 64, 64, 32, "red", "right");

  // Bottom road
  createCar(0, this.goal.y + (160 * 4.25), 64, 32, "blue", "left");
  createCar(1000, this.goal.y + (160 * 4.25), 48, 32, "green", "left");
  createCar(500, this.goal.y + (160 * 4.25), 64, 32, "red", "left");

  createCar(0, this.goal.y + (160 * 4.25 + 64), 64, 32, "blue", "right");
  createCar(1000, this.goal.y + (160 * 4.25 + 64), 48, 32, "green", "right");
  createCar(500, this.goal.y + (160 * 4.25 + 64), 64, 32, "red", "right");

  // Add some buildings

  this.obstacles.push(
// Top
new Building("pokeCenter", this.goal.x + 152, -20, 1.8, 1.8),
new Building("tallRed", 0, -48, 1.5, 1.5),
new Building("tallRed", 72, -48, 1.5, 1.5),
new Building("tallBlue", 144, -48, 1.5, 1.5),
new Building("tallBlue", 216, -48, 1.5, 1.5),
new Building("groceryStore", 288, 24, 1.5, 1.5),
new Building("house2", 384, 24, 1.5, 1.5),
new Building("wideStore", 456, 24, 1.5, 1.5),
// Mid-Top
new Building("mall", this.goal.x, this.goal.y + 200, 1.5, 1.5),
new Building("tallOffice", canvas.width-72, this.goal.y + 164, 1.5, 1.5),
new Building("tallOffice", canvas.width-144, this.goal.y + 164, 1.5, 1.5),
new Building("tallOffice", canvas.width-216, this.goal.y + 164, 1.5, 1.5),
// Mid-Bottom
new Building("tallBlue", 0, canvas.height -460, 1.5, 1.5),
new Building("tallRed", 80, canvas.height -460, 1.5, 1.5),
new Building("tallBlue", 160, canvas.height -460, 1.5, 1.5)
);

// draw a bunch of bushes
for (let i = 0; i < 15; i++) {
  this.obstacles.push(
    new DecorObst("bush", 0 + (i * 24), canvas.height - 128, 1.5, 1.5),
    new DecorObst("bush", 432 + (i * 24), canvas.height - 128, 1.5, 1.5));
  }
for (let i = 0; i < 20; i++) {
  this.obstacles.push(new DecorObst("bush", 856 + (i * 24), canvas.height - 128, 1.5, 1.5));
  }

 // Draw benches
  this.obstacles.push(
    //new DecorObst("bench", 128, canvas.height - 112, 1.5, 1.5),
    new DecorObst("bench", 256, canvas.height - 112, 1.5, 1.5),
    new DecorObst("trashBin", 256 + 48, canvas.height - 112, 1.5, 1.5),
    new DecorObst("bench", 432, canvas.height - 112, 1.5, 1.5),
    new DecorObst("trashBin", 432 + 48, canvas.height - 112, 1.5, 1.5),
    new DecorObst("bench", 432 + 154, canvas.height - 112, 1.5, 1.5),
    new DecorObst("bench", 432 + 308, canvas.height - 112, 1.5, 1.5),
    new DecorObst("trashBin", 740 - 32, canvas.height - 112, 1.5, 1.5),
    new DecorObst("bench", canvas.width - 160, canvas.height - 112, 1.5, 1.5),
    new DecorObst("trashBin",canvas.width - 320 - 32, canvas.height - 112, 1.5, 1.5),
    new DecorObst("bench", canvas.width - 320, canvas.height - 112, 1.5, 1.5)
    );
  

  // let's add a statue to make passing through the bottom road more difficult
  this.obstacles.push(new DecorObst("statue", 750, canvas.height - 348, 3, 3));

  //Register all obstacles
  this.obstacles.forEach((obst) => obst.register());

  }  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
