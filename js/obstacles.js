/*
 * Preciso de pensar aqui um bocado nos diferentes tipos de obstaculo. Estrada, pessoas (boas e más)?
 *
 *
 *
 */

/* MAIN OBSTACLE CLASS */
class Obstacle {
  constructor(x, y, width, height, type, widthMultiplier, heightMultiplier) {
    this.x = x;
    this.y = y;
    this.dx = 4;
    this.dy = 4;
    this.width = width;
    this.height = height;
    this.type = type;
    this.widthMultiplier = widthMultiplier;
    this.heightMultiplier = heightMultiplier;
  }

  register() {
    if (!currentGame.objects.includes(this)) {
      currentGame.objects.push(this);
      // currentGame.obstacles.push(this);
    }
  }
}

class Tree extends Obstacle {
  constructor(type, x, y, widthMultiplier, heightMultiplier) {
    super();
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = null;
    this.height = null;
    this.widthMultiplier = widthMultiplier;
    this.heightMultiplier = heightMultiplier;
  }

  drawObstacle() {
    switch (this.type) {
      case "smallTree":
        this.width = cityTileset.smallTree.frameWidth;
        this.height = cityTileset.smallTree.frameHeight;
        simpleDraw(
          cityTileset,
          "smallTree",
          this.x,
          this.y,
          this.widthMultiplier,
          this.heightMultiplier
        );
        break;
      case "bigTree":
        this.width = cityTileset.bigTree.frameWidth * this.widthMultiplier;
        this.height = cityTileset.bigTree.frameHeight * this.heightMultiplier;
        simpleDraw(
          cityTileset,
          "bigTree",
          this.x,
          this.y,
          this.widthMultiplier,
          this.heightMultiplier
        );
        break;
    }
  }
}

/* ROAD CLASS & CROSSWALKS */
class Road extends Obstacle {
  constructor(x, y, width, heightMultiplier) {
    super();
    this.x = x;
    this.y = y;
    this.height = 128;
    this.width = width;
    this.heightMultiplier = heightMultiplier;
  }

  drawObstacle() {
    for (let i = 0; i < this.width / (16 * this.heightMultiplier); i++) {
      simpleDraw(
        cityTileset,
        "roadTop",
        this.x + (i * (16 * this.heightMultiplier)),
        this.y,
        this.heightMultiplier,
        this.heightMultiplier
      );
      simpleDraw(
        cityTileset,
        "roadBottom",
        this.x + (i * (16 * this.heightMultiplier)),
        this.y + (16 * this.heightMultiplier),
        this.heightMultiplier,
        this.heightMultiplier
      );
    }
  }
}

class Crosswalk {
  constructor(x, y, width, heightMultiplier) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heightMultiplier = heightMultiplier;
  }

  drawCrosswalk() {
      simpleDraw(
      cityTileset,
      "crosswalk",
      this.x,
      this.y,
      this.heightMultiplier,
      this.heightMultiplier
    );
    simpleDraw(
      cityTileset,
      "crosswalk",
      this.x,
      this.y + (16 * this.heightMultiplier),
      this.heightMultiplier,
      this.heightMultiplier
    );
  }
}

/* Gotta give a little more space to pass on the crosswalks. 
 * Ideas: draw the same width but have the collision width be smaller*/

function createRoad(y, numOfCrosswalks) {

  let cwLocationArr = [
    canvas.width/2,
    [canvas.width/3, (canvas.width / 3 * 2)],
    [(canvas.width / 4), (canvas.width / 4 * 2), (canvas.width / 4 * 3)]
  ];

  if (numOfCrosswalks === 0 || numOfCrosswalks > 3) {
    numOfCrosswalks = 3;
  }

  switch (numOfCrosswalks) {
    case 1:
    currentGame.crosswalks.push(new Crosswalk(cwLocationArr[0] - 64, y, 64, 4));
    currentGame.obstacles.push(
      new Road(0, y, cwLocationArr[0] - 64, 4),
      new Road(cwLocationArr[0], y, cwLocationArr[0] + 64, 4));
    break;
    case 2:
    currentGame.crosswalks.push(
      new Crosswalk(cwLocationArr[1][0] - 64, y, 64, 4),
      new Crosswalk(cwLocationArr[1][1] - 64, y, 64, 4)
      );
    currentGame.obstacles.push(
      new Road(0, y, cwLocationArr[1][0] - 64, 4),
      new Road(cwLocationArr[1][0], y, cwLocationArr[1][0] - 64, 4),
      new Road(cwLocationArr[1][1], y, cwLocationArr[1][0] + 64, 4));
    break;
    case 3:
    currentGame.crosswalks.push(
      new Crosswalk(cwLocationArr[2][0] - 64, y, 64, 4),
      new Crosswalk(cwLocationArr[2][1] - 64, y, 64, 4),
      new Crosswalk(cwLocationArr[2][2] - 64, y, 64, 4));
    currentGame.obstacles.push(
      new Road(0, y, cwLocationArr[2][0] - 64, 4),
      new Road(cwLocationArr[2][0], y, cwLocationArr[2][0] - 64, 4),
      new Road(cwLocationArr[2][1], y, cwLocationArr[2][0] - 64, 4),
      new Road(cwLocationArr[2][2], y, cwLocationArr[2][0] + 64, 4));
    break;
  }
}


