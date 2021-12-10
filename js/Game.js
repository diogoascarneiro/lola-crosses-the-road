class Game {
    constructor() {
        this.lola = {};
        this.animationID = null;
        this.gameOver = false;
        this.objects = [];
        this.cars = [];
        this.carFrequency = 0;
        this.wonGame = false;
    }

    createCar(x, y, width, height, color) {
        let newCar = new Car(x, y, width, height, color);
        this.cars.push(newCar);
        this.objects.push(newCar);
      }

    // createGoal(x, y, goalType) {
    //     let newGoal = new Goal(x, y);
    //     this.objects.push(newGoal);
    // }
  }

  class Goal extends Obstacle {
      constructor(x, y, goalType) {
          super();
          this.asset = null;
          this.x = x;
          this.y = y;
          this.goalType = goalType;
      }

      drawGoal() {
    ctx.drawImage(cityTileset2, cityTileset2.house1.spriteSX, cityTileset2.house1.spriteSY,
    cityTileset2.house1.frameWidth, cityTileset2.house1.frameHeight, this.x, this.y,
    cityTileset2.house1.frameWidth * 2, cityTileset2.house1.frameHeight * 2);
      }

      checkIfWon() {
          if (detectCollision(currentGame.lola, this)) {
              currentGame.wonGame = true;
          }
      }
  }