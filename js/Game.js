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
  }

  level1() {
    //Create some people
  this.obstacles.push(
    //Top
    new Person("male1", 40, 40, 0.7, 0.7, "down"),
    new Person("female1", canvas.width - 40, 40, 0.7, 0.7, "down"),
    new Person("male3", canvas.width - 40, 80, 0.7, 0.7, "down"),
    //Mid-Top
    new Person("male2", 40, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    new Person("male1", canvas.width - 40, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    new Person("female1", canvas.width - 500, currentGame.goal.y + (160 * 2.20), 0.7, 0.7, "down"),
    //Mid-Bottom
    new Person("female1", 40, currentGame.goal.y + (160 * 4), 0.7, 0.7, "down"),
    new Person("male1", canvas.width - 40, currentGame.goal.y + (160 * 4), 0.7, 0.7, "down"),
    new Person("male2", canvas.width - 500, currentGame.goal.y + (160 * 4), 0.7, 0.7, "down"),
    //Bottom
    //new Person("male1", 40, canvas.height - 64, 0.7, 0.7, "down"),
    new Person("male3", canvas.width - 40, canvas.height - 64, 0.7, 0.7, "down"),
    new Person("male2", canvas.width - 500, canvas.height - 64, 0.7, 0.7, "down")
  );

  // And some static obstacles

  this.obstacles.push(
    new Tree("bigTree", currentGame.goal.x - 64, currentGame.goal.y, 2, 2),
    new Tree("smallTree", 0, canvas.height - 96, 2, 2),
    //new Tree("bigTree", 650, 700, 2, 2)
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

  //Register all obstacles
  this.obstacles.forEach((obst) => obst.register());

  }  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
