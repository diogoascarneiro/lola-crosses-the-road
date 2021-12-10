 /* Tired of writing these incredibly long drawImage functions? Use my patented solution, the simpleDraw function!
 *  Simply feed the function the following arguments: 
 *  imgObject = the imgAsset object aka tileset/sprite;
 *  assetName = a string with the name of the specific item we want to draw. These are defined in assets.js
 *  dx & dy = start coordinates to place the item
 *  widthMultiplier & heightMultiplier = use these to make items smaller or bigger. E.g. 2 will double the width or height;
 *  Try simpleDraw() for all your map drawing needs today! (note: solution not actually patented) */

function simpleDraw(imgObj, assetName, dx, dy, widthMultiplier, heightMultiplier) {
    ctx.drawImage(imgObj, imgObj[`${assetName}`].spriteSX, imgObj[`${assetName}`].spriteSY,
    imgObj[`${assetName}`].frameWidth, imgObj[`${assetName}`].frameHeight, dx, dy,
    imgObj[`${assetName}`].frameWidth * widthMultiplier, imgObj[`${assetName}`].frameHeight * heightMultiplier);
    }

/* Create obstacles here and register them */


  
/* Note to self: make a billboard with LOLA coffee */

function drawMap() {
 
    // Cover the map with bricks

  for (let i = 0; i < canvas.width / 32; i++) {
    for (let j = 0; j < canvas.height / 32; j++) { 
    ctx.drawImage(cityTileset, cityTileset.sidewalk.spriteSX, cityTileset.sidewalk.spriteSY,
        cityTileset.sidewalk.frameWidth, cityTileset.sidewalk.frameHeight, i * 32, j * 32,
        cityTileset.sidewalk.frameWidth * 2, cityTileset.sidewalk.frameHeight * 2);
    }
}

// Draw the road - first the top, then bottom
for (let i = 0; i < canvas.width / 64; i++) {
    ctx.drawImage(cityTileset, cityTileset.roadTop.spriteSX, cityTileset.roadTop.spriteSY,
        cityTileset.roadTop.frameWidth, cityTileset.roadTop.frameHeight, i * 64, 304,
        cityTileset.roadTop.frameWidth * 4, cityTileset.roadTop.frameHeight * 4);
}

for (let i = 0; i < canvas.width / 64; i++) {
    ctx.drawImage(cityTileset, cityTileset.roadBottom.spriteSX, cityTileset.roadBottom.spriteSY,
        cityTileset.roadBottom.frameWidth, cityTileset.roadBottom.frameHeight, i * 64, 368,
        cityTileset.roadBottom.frameWidth * 4, cityTileset.roadBottom.frameHeight * 4);
}

// Gotta test those crosswalks too.

for (let i = 0; i < 2; i++) {
    ctx.drawImage(cityTileset, cityTileset.crosswalk.spriteSX, cityTileset.crosswalk.spriteSY,
        cityTileset.crosswalk.frameWidth, cityTileset.crosswalk.frameHeight, 256, 304 + (i * 64),
        cityTileset.crosswalk.frameWidth * 4, cityTileset.crosswalk.frameHeight * 4);
}

for (let i = 0; i < 2; i++) {
    ctx.drawImage(cityTileset, cityTileset.crosswalk.spriteSX, cityTileset.crosswalk.spriteSY,
        cityTileset.crosswalk.frameWidth, cityTileset.crosswalk.frameHeight, 256 * 4, 304 + (i * 64),
        cityTileset.crosswalk.frameWidth * 4, cityTileset.crosswalk.frameHeight * 4);
}



// How about some grass?

for (let i = 0; i < canvas.width / 16; i++) {
    simpleDraw(cityTileset, "grass", i * 16, 256, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, 272, 1, 1);
    simpleDraw(cityTileset, "grass", i * 16, 288, 1, 1);
    ctx.drawImage(cityTileset, cityTileset.grass.spriteSX, cityTileset.grass.spriteSY,
        cityTileset.grass.frameWidth, cityTileset.grass.frameHeight, i * 16, 256,
        cityTileset.grass.frameWidth, cityTileset.grass.frameHeight);
}

// Let's draw a shop

ctx.drawImage(cityTileset2, cityTileset2.shop.spriteSX, cityTileset2.shop.spriteSY,
    cityTileset2.shop.frameWidth, cityTileset2.shop.frameHeight, 160, 160,
    cityTileset2.shop.frameWidth * 2, cityTileset2.shop.frameHeight * 2);


// Let's try to draw a person

simpleDraw(peopleSet1, "male1down", 700, 100, 0.7, 0.7);
 // Let's make sure we draw all the objects we created!   
    currentGame.obstacles.forEach((obst) => {
        obst.drawObstacle()
        });
    

}