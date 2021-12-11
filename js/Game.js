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
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  