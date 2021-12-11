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

/* ROAD CLASS */
class Road extends Obstacle {
  constructor(y, width, heightMultiplier) {
    super();
    this.y = y;
    this.width = width;
    this.heightMultiplier = heightMultiplier;
  }

  drawObstacle() {
    for (let i = 0; i < this.width; i++) {
      simpleDraw(
        cityTileset,
        "roadTop",
        i * 16 * heightMultiplier,
        y,
        heightMultiplier,
        heightMultiplier
      );
      simpleDraw(
        cityTileset,
        "roadBottom",
        i * 16 * heightMultiplier,
        y + 16 * heightMultiplier,
        heightMultiplier,
        heightMultiplier
      );
    }
  }
}

class Crosswalk {
  constructor(y, width, heightMultiplier) {
    this.y = y;
    this.width = width;
    this.heightMultiplier = heightMultiplier;
  }
  drawCrosswalk() {
    for (let i = 0; i < this.width; i++) {
      simpleDraw(
        cityTileset,
        "crosswalk",
        i * 16 * heightMultiplier,
        y,
        heightMultiplier,
        heightMultiplier
      );
    }
  }
}

/*
function createRoad(y, numOfCrosswalks) {
  if (numOfCrosswalks === 0 || numOfCrosswalks > 3) {
    numOfCrosswalks = 3;
  }
  switch (numOfCrosswalks) {
    case 1:
    currentGame.obstacles.push(new Road(y, blahblah))  
    break;
    case 2:

    break;
    case 3:

    break;
  }
}

*/
