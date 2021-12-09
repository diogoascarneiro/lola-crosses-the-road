 
 /* Cheat Sheet - for studying 
        * ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        * image = source image; sx and sy = the top/left coordinates to "slice" the img; sWidth & sHeight = the bottom/right coordinates to slice the img
        * dx, dy, dwidth & dheight = onde as colocar)
        */

ctx.drawImage(cityTileset, sidewalk.spriteSX, sidewalk.spriteSY, sidewalk.frameWidth, sidewalk.frameHeight, 0, 0, sidewalk.frameWidth, sidewalk.frameHeight);