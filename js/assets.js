let assetsArray = [];
let imagesLoaded = 0;
// I don't like doing it like this but time's of the essence!
let activeDogFrame = 0;
let activePersonFrame = 0;

class ImgAsset extends Image {
  constructor(src, frameWidth, frameHeight, wOffset, hOffset) {
    super();
    this.src = src;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.onload = () => imagesLoaded++;
    this.wOffset = wOffset;
    this.hOffset = hOffset;
    this.row = 1;
    this.column = 1;
  }
    register() {
    assetsArray.push(this);
  }
}

/* CHECK IF ALL ASSETS ARE LOADED */
function checkAssetsLoaded() {
  if (imagesLoaded === assetsArray.length) {
    return true;
  }
}

/* Declaring assets here. Could have done it with a loop from an array but I wanted to have an identifier
 *  to refer to in the code elsewhere, e.g. "lolaSprite" for Lola's sprite */

// Start screen, game win and game over images
let startScreen1 = new ImgAsset("./assets/startscreen.png");
startScreen1.register();
let startScreen2 = new ImgAsset("./assets/startscreen2.png");
startScreen2.register();
let gameOverScreen1 = new ImgAsset("./assets/gameover1.png");
gameOverScreen1.register();
let gameOverScreen2 = new ImgAsset("./assets/gameover2.png");
gameOverScreen2.register();
let gameWinScreen1 = new ImgAsset("./assets/gamewin1.png");
gameOverScreen1.register();
let gameWinScreen2 = new ImgAsset("./assets/gamewin2.png");
gameOverScreen2.register();

/* LOLA'S SPRITE <3
 * Need to change to a new asset!
 */

// I'm animating this one, so there's a special activeFrame key here
let lolaWalking = new ImgAsset("./assets/lola-walk.png");
lolaWalking.register();
lolaWalking.walking = {
  frameWidth: 64,
  frameHeight: 32,
  left: {spriteSX: 0 + (activeDogFrame * 64), spriteSY: 0 + (activeDogFrame * 32)},
  right: {spriteSX: 0 + (activeDogFrame * 64), spriteSY: 32 + (activeDogFrame * 32)}
}

/* Car Sprites */

const carSprites = new ImgAsset("./assets/cars.png", 16, 16, 0, 0);
carSprites.register();

carSprites.red = {
  frameWidth: 48,
  frameHeight: 32,
  up: { spriteSX: 0, spriteSY: 2 * 32 },
  down: { spriteSX: 0, spriteSY: 3 * 32 },
  left: { spriteSX: 0, spriteSY: 1 * 32 },
  right: { spriteSX: 0, spriteSY: 0 },
}

carSprites.green = {
  frameWidth: 48,
  frameHeight: 32,
  up: { spriteSX: 1 * 48, spriteSY: 2 * 32 },
  down: { spriteSX: 1 * 48, spriteSY: 3 * 32 },
  left: { spriteSX: 1 * 48, spriteSY: 1 * 32 },
  right: { spriteSX: 1 * 48, spriteSY: 0 },
}

carSprites.blue = {
  frameWidth: 48,
  frameHeight: 32,
  up: { spriteSX: 2 * 48, spriteSY: 2 * 32 },
  down: { spriteSX: 2 * 48, spriteSY: 3 * 32 },
  left: { spriteSX: 2 * 48, spriteSY: 1 * 32 },
  right: { spriteSX: 2 * 48, spriteSY: 0 },
}

/* CITY TILESETS 1 & 2 */

const cityTileset = new ImgAsset("./assets/city-tileset.png", 16, 16, 0, 0);
cityTileset.register();

cityTileset.sidewalk = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 27 * 16,
  spriteSY: 0,
};

cityTileset.roadTop = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 15 * 16,
  spriteSY: 14 * 16,
};

cityTileset.roadBottom = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 15 * 16,
  spriteSY: 13 * 16,
};

cityTileset.smallTree = {
  frameWidth: 16,
  frameHeight: 32,
  spriteSX: 9 * 16,
  spriteSY: 9 * 16,
};

cityTileset.bigTree = {
  frameWidth: 48,
  frameHeight: 48,
  spriteSX: 8 * 16,
  spriteSY: 11 * 16,
};

cityTileset.statue = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 8 * 16,
  spriteSY: 8 * 16,
};

cityTileset.grass = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 8 * 16,
  spriteSY: 9 * 16,
};

cityTileset.sand = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 8 * 16,
  spriteSY: 10 * 16,
};

cityTileset.bush = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 10 * 16,
  spriteSY: 9 * 16,
};

cityTileset.flowers = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 10 * 16,
  spriteSY: 10 * 16,
};

cityTileset.bench = {
  frameWidth: 32,
  frameHeight: 16,
  spriteSX: 21 * 16,
  spriteSY: 5 * 16,
}

cityTileset.trashBin = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 20 * 16,
  spriteSY: 6 * 16,
}

cityTileset.crosswalk = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 13 * 16,
  spriteSY: 2 * 16,
};

cityTileset.pavement = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 22 * 16,
  spriteSY: 2 * 16,
}

const cityTileset2 = new ImgAsset("./assets/city-tileset2.png", 16, 16, 0, 0);
cityTileset2.register();

cityTileset2.shop = {
  frameWidth: 64,
  frameHeight: 48,
  spriteSX: 5 * 16,
  spriteSY: 9 * 16,
};

cityTileset2.house1 = {
  frameWidth: 64,
  frameHeight: 48,
  spriteSX: 16 * 16,
  spriteSY: 9 * 16,
};

// BUILDINGS

const buildingSet = new ImgAsset("./assets/buildings.png", 32,32, 0, 0);
buildingSet.register();

buildingSet.tallRed = {
  frameWidth: 48,
  frameHeight: 96,
  spriteSX: 0,
  spriteSY: 0,
}

buildingSet.tallBlue = {
  frameWidth: 48,
  frameHeight: 96,
  spriteSX: 48,
  spriteSY: 0,
}

buildingSet.mall = {
  frameWidth: 79,
  frameHeight: 96,
  spriteSX: 3 * 48 + 1,
  spriteSY: 0,
}

buildingSet.tallOffice = {
  frameWidth: 48,
  frameHeight: 96,
  spriteSX: 224,
  spriteSY: 0,
}

buildingSet.wideStore = {
  frameWidth: 64,
  frameHeight: 48,
  spriteSX: 0,
  spriteSY: 96
}

buildingSet.tinyHouse = {
  frameWidth: 32,
  frameHeight: 48,
  spriteSX: 160,
  spriteSY: 96
}

buildingSet.pokeCenter = {
  frameWidth: 64,
  frameHeight: 64,
  spriteSX: 0,
  spriteSY: 144
}

buildingSet.groceryStore = {
  frameWidth: 64,
  frameHeight: 48,
  spriteSX: 64,
  spriteSY: 144
}
buildingSet.house2 = {
  frameWidth: 48,
  frameHeight: 48,
  spriteSX: 128,
  spriteSY: 144
}
// PEOPLE SPRITES

const peopleSet1 = new ImgAsset("./assets/people1.png", 48, 72, 0, 30);
peopleSet1.register();

// Changes needed for animating people - still WIP sadly
//  peopleSet1.male1 = {
//    frameWidth: 48,
//    frameHeight: 72,
//    up: { spriteSX: 0, spriteSY: 6 * 48 },
//    down: { spriteSX: 0, spriteSY: 0 },
//    left: { spriteSX: 0, spriteSY: 2 * 48 },
//    right: { spriteSX: 0, spriteSY: 4 * 48 },
//  };
//  peopleSet1.male2 = {
//    frameWidth: 48,
//    frameHeight: 72,
//    up: { spriteSX: 6 * 48, spriteSY: 6 * 48 },
//    down: { spriteSX: 6 * 48, spriteSY: 0 },
//    left: { spriteSX: 6 * 48, spriteSY: 2 * 48 },
//    right: { spriteSX: 6 * 48, spriteSY: 4 * 48 },
//  };
//  peopleSet1.male3 = {
//    frameWidth: 48,
//    frameHeight: 72,
//    up: { spriteSX: 9 * 48, spriteSY: 6 * 48 },
//    down: { spriteSX: 9 * 48, spriteSY: 0 },
//    left: { spriteSX: 9 * 48, spriteSY: 2 * 48 },
//    right: { spriteSX: 9 * 48, spriteSY: 4 * 48 },
//  };

//  peopleSet1.female1 = {
//    frameWidth: 48,
//    frameHeight: 72,
//    up: { spriteSX: 3 * 48, spriteSY: 6 * 48 },
//    down: { spriteSX: 3 * 48, spriteSY: 0 },
//    left: { spriteSX: 3 * 48, spriteSY: 2 * 48 },
//    right: { spriteSX: 3 * 48, spriteSY: 4 * 48 },
//  };

  peopleSet1.male1 = {
    frameWidth: 48,
    frameHeight: 72,
    up: { spriteSX: 1 * 48, spriteSY: 6 * 48 },
    down: { spriteSX: 1 * 48, spriteSY: 0 },
    left: { spriteSX: 1 * 48, spriteSY: 2 * 48 },
    right: { spriteSX: 1 * 48, spriteSY: 4 * 48 },
  };
  peopleSet1.male2 = {
    frameWidth: 48,
    frameHeight: 72,
    up: { spriteSX: 7 * 48, spriteSY: 6 * 48 },
    down: { spriteSX: 7 * 48, spriteSY: 0 },
    left: { spriteSX: 7 * 48, spriteSY: 2 * 48 },
    right: { spriteSX: 7 * 48, spriteSY: 4 * 48 },
  };
  peopleSet1.male3 = {
    frameWidth: 48,
    frameHeight: 72,
    up: { spriteSX: 10 * 48, spriteSY: 6 * 48 },
    down: { spriteSX: 10 * 48, spriteSY: 0 },
    left: { spriteSX: 10 * 48, spriteSY: 2 * 48 },
    right: { spriteSX: 10 * 48, spriteSY: 4 * 48 },
  };
  peopleSet1.female1 = {
    frameWidth: 48,
    frameHeight: 72,
    up: { spriteSX: 4 * 48, spriteSY: 6 * 48 },
    down: { spriteSX: 4 * 48, spriteSY: 0 },
    left: { spriteSX: 4 * 48, spriteSY: 2 * 48 },
    right: { spriteSX: 4 * 48, spriteSY: 4 * 48 },
  };

/* YAY, trying out sounds too! */

let screamMale = new Audio("./assets/sounds/scream-pain-male.mp3");
let themeMusic = new Audio("./assets/sounds/theme.mp3");
themeMusic.loop = true;
let awoo = new Audio("./assets/sounds/awoo.mp3");
