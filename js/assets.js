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

const sidewalk = {
  column: 1,
  row: 1,
  frameWidth: 16,
  frameHeight: 16,
  spriteSX: this.column * this.frameWidth,
  spriteSY: this.row * this.frameHeight
}

function checkAssetsLoaded() {
   if (imagesLoaded === assetsArray.length) {
          return true;
        }
    }