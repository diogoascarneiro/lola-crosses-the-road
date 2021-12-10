class Game {
    constructor() {
        this.lola = {};
        this.animationID = null;
        this.gameOver = false;
        this.objects = [];
        this.cars = [];
        this.carFrequency = 0;
    }

    createCar(x, y, width, height, color) {
        let newCar = new Car(x, y, width, height, color);
        this.cars.push(newCar);
        this.objects.push(newCar);
      }
  }