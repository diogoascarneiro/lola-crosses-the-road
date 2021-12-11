// GOAL CLASS

class Goal extends Obstacle {
  constructor(x, y, width, height, goalType) {
    super();
    this.asset = null;
    this.x = x;
    this.y = y;
    this.width = width * 2;
    this.height = height * 2;
    this.goalType = goalType;
  }

  drawGoal() {
    ctx.drawImage(
      cityTileset2,
      cityTileset2.house1.spriteSX,
      cityTileset2.house1.spriteSY,
      cityTileset2.house1.frameWidth,
      cityTileset2.house1.frameHeight,
      this.x,
      this.y,
      cityTileset2.house1.frameWidth * 2,
      cityTileset2.house1.frameHeight * 2
    );
  }

  checkIfWon() {
    if (detectCollision(currentGame.lola, this)) {
      currentGame.wonGame = true;
    }
  }
}
