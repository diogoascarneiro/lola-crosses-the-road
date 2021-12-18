// GOAL CLASS

class Goal extends Obstacle {
  constructor(x, y, width, height, goalType) {
    super();
    this.asset = null;
    this.x = x;
    this.y = y;
    this.width = width * 1.5;
    this.height = height * 1.5;
    this.goalType = goalType;
  }

  drawGoal() {
    simpleDraw(cityTileset2, "house1", this.x, this.y, 1.5, 1.5);
  }

  checkIfWon() {
    if (detectCollision(currentGame.lola, this)) {
      currentGame.wonGame = true;
    }
  }
}
