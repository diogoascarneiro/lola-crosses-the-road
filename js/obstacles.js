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
      }
  }
}

class DecorObst extends Obstacle {
  constructor(type, x, y, widthMultiplier, heightMultiplier) {
    super();
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = cityTileset[`${type}`].frameWidth * widthMultiplier;
    this.height = cityTileset[`${type}`].frameHeight * heightMultiplier;
    this.widthMultiplier = widthMultiplier;
    this.heightMultiplier = heightMultiplier;
  }

  drawObstacle() {
    switch (this.type) {
       case this.type:
        simpleDraw(cityTileset, this.type, this.x, this.y, this.widthMultiplier, this.heightMultiplier)
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
    this.height = 112;
    this.width = width;
    this.heightMultiplier = heightMultiplier;
  }

  drawObstacle() {
    for (let i = 0; i < canvas.width / (16 * this.heightMultiplier); i++) {
      simpleDraw(
        cityTileset,
        "pavement",
        i * (16 * this.heightMultiplier),
        this.y - (4 * this.heightMultiplier),
        this.heightMultiplier,
        this.heightMultiplier / 4
      );
      simpleDraw(
        cityTileset,
        "roadTop",
        i * (16 * this.heightMultiplier),
        this.y,
        this.heightMultiplier,
        this.heightMultiplier
      );
      simpleDraw(
        cityTileset,
        "roadBottom",
        i * (16 * this.heightMultiplier),
        this.y + (16 * this.heightMultiplier),
        this.heightMultiplier,
        this.heightMultiplier
      );
      simpleDraw(
        cityTileset,
        "pavement",
        i * (16 * this.heightMultiplier),
        this.y + (32 * this.heightMultiplier),
        this.heightMultiplier,
        this.heightMultiplier / 4
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

/* This function doesn't actually draw separate roads - it just creates one spanning the canvas.
*  Then it creates road objects which are slightly smaller than the road image itself, just to 
*  make it easier for Lola to cross the road without colliding. She deserves it!
*/

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
      new Road(0, y, cwLocationArr[0] - 88, 4),
      new Road(cwLocationArr[0] + 24, y, cwLocationArr[0] + 256, 4));
    break;
    case 2:
    currentGame.crosswalks.push(
      new Crosswalk(cwLocationArr[1][0] - 64, y, 64, 4),
      new Crosswalk(cwLocationArr[1][1] - 64, y, 64, 4)
      );
    currentGame.obstacles.push(
      new Road(0, y, cwLocationArr[1][0] - 88, 4),
      new Road(cwLocationArr[1][0] + 24, y, cwLocationArr[1][0] - 112, 4),
      new Road(cwLocationArr[1][1] + 24, y, cwLocationArr[1][0] + 256, 4));
    break;
    case 3:
    currentGame.crosswalks.push(
      new Crosswalk(cwLocationArr[2][0] - 64, y, 64, 4),
      new Crosswalk(cwLocationArr[2][1] - 64, y, 64, 4),
      new Crosswalk(cwLocationArr[2][2] - 64, y, 64, 4));
    currentGame.obstacles.push(
      new Road(0, y, cwLocationArr[2][0] - 88, 4),
      new Road(cwLocationArr[2][0] + 24, y, cwLocationArr[2][0] - 112, 4),
      new Road(cwLocationArr[2][1] + 24, y, cwLocationArr[2][0] - 112, 4),
      new Road(cwLocationArr[2][2] + 24, y, cwLocationArr[2][0] + 256, 4));
    break;
  }
}

// Time to make some buildings

class Building extends Obstacle {
  constructor(type, x, y, widthMultiplier, heightMultiplier) {
    super();
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = buildingSet[`${type}`].frameWidth * widthMultiplier;
    this.height = buildingSet[`${type}`].frameHeight * heightMultiplier;
    this.widthMultiplier = widthMultiplier;
    this.heightMultiplier = heightMultiplier;
  }
    drawObstacle() {
    switch (this.type) {
      default: simpleDraw(buildingSet, this.type, this.x, this.y, this.widthMultiplier, this.heightMultiplier);
    }
  }

  register() {
    if (!currentGame.objects.includes(this)) {
      currentGame.objects.push(this);
      }
      if (!currentGame.buildings.includes(this)) {
        currentGame.buildings.push(this);
        }
  }
}

// Need to make a drawBuildings function so they overlap the cars and make them sneakier

function drawBuildings() {
  currentGame.buildings.forEach((building) => {
    building.drawObstacle();    
  });
}