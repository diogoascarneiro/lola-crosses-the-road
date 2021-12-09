 
 /* Cheat Sheet - for studying 
        * ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        * image = source image; sx and sy = the top/left coordinates to "slice" the img; sWidth & sHeight = the bottom/right coordinates to slice the img
        * dx, dy, dwidth & dheight = onde as colocar)
        */

function drawMap() {
 
    // Cover the map with bricks
for (let i = 0; i < canvas.width / 32; i++) {
    for (let j = 0; j < canvas.height / 32; j++) { 
    ctx.drawImage(cityTileset, cityTileset.sidewalk.spriteSX, cityTileset.sidewalk.spriteSY,
        cityTileset.sidewalk.frameWidth, cityTileset.sidewalk.frameHeight, i * 32, j * 32,
        cityTileset.sidewalk.frameWidth * 2, cityTileset.sidewalk.frameHeight * 2);
    }
}

// Draw the road - first the top, then mid, then bottom
for (let i = 0; i < canvas.width / 64; i++) {
    ctx.drawImage(cityTileset, cityTileset.roadTop.spriteSX, cityTileset.roadTop.spriteSY,
        cityTileset.roadTop.frameWidth, cityTileset.roadTop.frameHeight, i * 64, 304,
        cityTileset.roadTop.frameWidth * 4, cityTileset.roadTop.frameHeight * 4);
}

for (let i = 0; i < canvas.width / 64; i++) {
    ctx.drawImage(cityTileset, cityTileset.roadMid.spriteSX, cityTileset.roadMid.spriteSY,
        cityTileset.roadMid.frameWidth, cityTileset.roadMid.frameHeight, i * 64, 368,
        cityTileset.roadMid.frameWidth * 4, cityTileset.roadMid.frameHeight * 4);
}

// for (let i = 0; i < canvas.width / 32; i++) {
//     ctx.drawImage(cityTileset, cityTileset.roadBottom.spriteSX, cityTileset.roadBottom.spriteSY,
//         cityTileset.roadBottom.frameWidth, cityTileset.roadBottom.frameHeight, i * 32, 368,
//         cityTileset.roadBottom.frameWidth * 2, cityTileset.roadBottom.frameHeight * 2);
// }

}