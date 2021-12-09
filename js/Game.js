class Game {
    constructor() {
        this.lola = {};
        this.animationID = null;
        this.gameOver = false;
        this.objects = [];
        this.cars = [];
        this.carFrequency = 0;
    }

    createCar() {
        let newCar = new Car(0, 525, 64, 32, "blue");
        this.cars.push(newCar);
        this.objects.push(newCar);
      }
  }