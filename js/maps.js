 
 /* Cheat Sheet - for studying 
        * ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        * image = source image; sx and sy = the top/left coordinates to "slice" the img; sWidth & sHeight = the bottom/right coordinates to slice the img
        * dx, dy, dwidth & dheight = onde as colocar)
        */

/*
function cleanDraw(imgObj, assetObj, dx, dy, widthMultiplier, heightMultiplier) {
    ctx.drawImage(imgObj, imgObj[assetObj].spriteSX, imgObj[assetObj].spriteSY,
        imgObj[assetObj].frameWidth, imgObj[assetObj].frameHeight, dx, dy,
        imgObj[assetObj].frameWidth * widthMultiplier, imgObj[assetObj].frameHeight * heightMultiplier);
    }
 cleanDraw(cityTileset, cityTileset.smallTree, canvas.width - 50, 40, 1, 1);
*/

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

// Draw a tree. It looks cute
ctx.drawImage(cityTileset, cityTileset.smallTree.spriteSX, cityTileset.smallTree.spriteSY,
    cityTileset.smallTree.frameWidth, cityTileset.smallTree.frameHeight, canvas.width - 100, 50,
    cityTileset.smallTree.frameWidth * 2, cityTileset.smallTree.frameHeight * 2);

// Now a big one. 

ctx.drawImage(cityTileset, cityTileset.bigTree.spriteSX, cityTileset.bigTree.spriteSY,
    cityTileset.bigTree.frameWidth, cityTileset.bigTree.frameHeight, canvas.width - 300, 80,
    cityTileset.bigTree.frameWidth * 2, cityTileset.bigTree.frameHeight * 2);


// How about some grass?

for (let i = 0; i < canvas.width / 16; i++) {
    ctx.drawImage(cityTileset, cityTileset.grass.spriteSX, cityTileset.grass.spriteSY,
        cityTileset.grass.frameWidth, cityTileset.grass.frameHeight, i * 16, 256,
        cityTileset.grass.frameWidth, cityTileset.grass.frameHeight);
}

// Let's draw a shop

ctx.drawImage(cityTileset2, cityTileset2.shop.spriteSX, cityTileset2.shop.spriteSY,
    cityTileset2.shop.frameWidth, cityTileset2.shop.frameHeight, 160, 160,
    cityTileset2.shop.frameWidth * 2, cityTileset2.shop.frameHeight * 2);



}