/* Cheat Sheet - for studying
     * ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
     * image = source image; sx and sy = the top/left coordinates to "slice" the img; sWidth & sHeight = the bottom/right coordinates to slice the img
     * dx, dy, dwidth & dheight = onde as colocar)
     */

/* Tired of writing these incredibly long drawImage functions? Use my patented solution, the simpleDraw function!
 *  Simply feed the function the following arguments:
 *  imgObject = the imgAsset object aka tileset/sprite;
 *  assetName = a string with the name of the specific item we want to draw. These are defined in assets.js
 *  dx & dy = start coordinates to place the item
 *  widthMultiplier & heightMultiplier = use these to make items smaller or bigger. E.g. 2 will double the width or height;
 *  direction = the direction of the asset
 *  Try simpleDraw() for all your map drawing needs today! (note: solution not actually patented)
 */

function simpleDraw(
  imgObj,
  assetName,
  dx,
  dy,
  widthMultiplier,
  heightMultiplier,
  direction
) {
  if (!direction) {
    ctx.drawImage(
      imgObj,
      imgObj[`${assetName}`].spriteSX,
      imgObj[`${assetName}`].spriteSY,
      imgObj[`${assetName}`].frameWidth,
      imgObj[`${assetName}`].frameHeight,
      dx,
      dy,
      imgObj[`${assetName}`].frameWidth * widthMultiplier,
      imgObj[`${assetName}`].frameHeight * heightMultiplier
    );
  } else {
    ctx.drawImage(
      imgObj,
      imgObj[`${assetName}`][`${direction}`].spriteSX,
      imgObj[`${assetName}`][`${direction}`].spriteSY,
      imgObj[`${assetName}`].frameWidth,
      imgObj[`${assetName}`].frameHeight,
      dx,
      dy,
      imgObj[`${assetName}`].frameWidth * widthMultiplier,
      imgObj[`${assetName}`].frameHeight * heightMultiplier
    );
  }
}

/* Note to self: make a billboard with LOLA coffee */

function drawMap() {
  // Cover the map with bricks

  for (let i = 0; i < canvas.width / 32; i++) {
    for (let j = 0; j < canvas.height / 32; j++) {
      ctx.drawImage(
        cityTileset,
        cityTileset.sidewalk.spriteSX,
        cityTileset.sidewalk.spriteSY,
        cityTileset.sidewalk.frameWidth,
        cityTileset.sidewalk.frameHeight,
        i * 32,
        j * 32,
        cityTileset.sidewalk.frameWidth * 2,
        cityTileset.sidewalk.frameHeight * 2
      );
    }
  }

  // How about some grass?

  for (let i = 0; i < canvas.width / 16; i++) {
    //Top
    simpleDraw(cityTileset, "grass", i * 16, 0, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, 16, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, 32, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, 48, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, 64, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, 80, 1, 1);
        
    //Bottom
    simpleDraw(cityTileset, "grass", i * 16, canvas.height - 16, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, canvas.height - 32, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, canvas.height - 48, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, canvas.height - 64, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, canvas.height - 80, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, canvas.height - 96, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, canvas.height - 112, 1, 1);
 }

  // Let's draw a shop
/*
  ctx.drawImage(
    cityTileset2,
    cityTileset2.shop.spriteSX,
    cityTileset2.shop.spriteSY,
    cityTileset2.shop.frameWidth,
    cityTileset2.shop.frameHeight,
    160,
    160,
    cityTileset2.shop.frameWidth * 2,
    cityTileset2.shop.frameHeight * 2
  );*/

  // Let's make sure we draw all the static obstacles and crosswalks we created!
  // Note to self: need to separate people from the obstacle drawing somehow to make them walk over crosswalks

  currentGame.obstacles.forEach((obst) => {
    if (!(obst instanceof Person) && !(obst instanceof Building)) {
      obst.drawObstacle();
    }  
  });
  currentGame.crosswalks.forEach((cw) => {
    cw.drawCrosswalk();
  });
  currentGame.people.forEach((person) => {
    person.drawObstacle();    
  });
}
