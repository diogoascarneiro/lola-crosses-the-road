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

/* Note to self: make a billboard with LOLA Coffee */

function drawMap() {
  // Cover the map with bricks (note - update this to simpleDraw())

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

  // How about some grass? (Note: a nested loop here would look better... like the one below)

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

 for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    simpleDraw(cityTileset, "grass", 750 - 16 + (16 * i), canvas.height - 348 - 16 + (16*j), 1, 1);
    }
  }
 


 // Draw some sand for the dog park
for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 8; j++) {
    simpleDraw(cityTileset, "sand", 0 + (i * 16), canvas.height - 16 - (j * 16), 1, 1);
    }
  }
 

 // Draw some flowers too
 simpleDraw(cityTileset, "flowers", currentGame.goal.x + 16, currentGame.goal.y + 60, 2, 2);
 simpleDraw(cityTileset, "flowers", currentGame.goal.x + 80, currentGame.goal.y + 60, 2, 2);
 
  // Let's make sure we draw all the static obstacles and crosswalks we created!
  // Note to self: make these separate functions so I can reorder them more easily

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
