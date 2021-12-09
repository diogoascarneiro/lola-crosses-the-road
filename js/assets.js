let assetsArray = [];
let imagesLoaded = 0;

/* Declaring assets here. Could have done it with a loop from an array but I wanted to have an identifier to refer to in the code elsewhere, e.g. "lolaSprite" for Lola's sprite */

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
    /* ver como passar isto imediatamente ao criar um novo objecto desta classe em vez de ter que chamar o metodo separadamente */
    register() {assetsArray.push(this);}
    
 }

/* LOLA'S SPRITE <3
* Need to figure out a way to make the frames jump evenly by changing row and column! Offsetting is producing unintended results, namely bottom border is much wider than top
*/

let lolaSpriteLeft = new ImgAsset("assets/lola-sprite-left.png", 55, 35, 15, -18);
lolaSpriteLeft.register();
let lolaSpriteRight = new ImgAsset("assets/lola-sprite-right.png", 55, 35, 15, -18);
lolaSpriteRight.register();
lolaSpriteRight.column = 13.70;


/* CITY TILESET */

const cityTileset = new ImgAsset("assets/city-tileset.png", 16, 16, 0, 0);
cityTileset.register();

cityTileset.sidewalk = {
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: 27 * 16,
  spriteSY: 0
}

cityTileset.roadTop = {
    frameWidth: 16,
    frameHeight: 16,
    spriteSX: 15 * 16,
    spriteSY: 14 * 16
  }

 cityTileset.roadMid = {
    frameWidth: 16,
    frameHeight: 16,
    spriteSX: 15 * 16,
    spriteSY: 13 * 16
  }
  
  cityTileset.roadBottom = {
    frameWidth: 16,
    frameHeight: 16,
    spriteSX: 16 * 16,
    spriteSY: 11 * 16
  }

function checkAssetsLoaded() {
   if (imagesLoaded === assetsArray.length) {
          return true;
        }
    }