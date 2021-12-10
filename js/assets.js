let assetsArray = [];
let imagesLoaded = 0;

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

  /* CHECK IF ALL ASSETS ARE LOADED */
  function checkAssetsLoaded() {
    if (imagesLoaded === assetsArray.length) {
           return true;
         }
     } 


/* Declaring assets here. Could have done it with a loop from an array but I wanted to have an identifier
*  to refer to in the code elsewhere, e.g. "lolaSprite" for Lola's sprite */

/* LOLA'S SPRITE <3
* Need to figure out a way to make the frames jump evenly by changing row and column! 
*/

let lolaSpriteLeft = new ImgAsset("assets/lola-sprite-left.png", 55, 35, 15, -18);
lolaSpriteLeft.register();
let lolaSpriteRight = new ImgAsset("assets/lola-sprite-right.png", 55, 35, 15, -18);
lolaSpriteRight.register();
lolaSpriteRight.column = 13.70;


/* CITY TILESETS 1 & 2 */

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

 cityTileset.roadBottom = {
    frameWidth: 16,
    frameHeight: 16,
    spriteSX: 15 * 16,
    spriteSY: 13 * 16
  }
  
  cityTileset.smallTree = {
    frameWidth: 16,
    frameHeight: 32,
    spriteSX: 9 * 16,
    spriteSY: 9 * 16
  }
  
  cityTileset.bigTree = {
    frameWidth: 48,
    frameHeight: 48,
    spriteSX: 8 * 16,
    spriteSY: 11 * 16
  }

  cityTileset.grass = {
    frameWidth: 16,
    frameHeight: 16,
    spriteSX: 8 * 16,
    spriteSY: 9 * 16
  }

  cityTileset.crosswalk = {
    frameWidth: 16,
    frameHeight: 16,
    spriteSX: 13 * 16,
    spriteSY: 2 * 16
  }


  const cityTileset2 = new ImgAsset("assets/city-tileset2.png", 16, 16, 0, 0);
  cityTileset2.register();

  cityTileset2.shop = {
    frameWidth: 64,
    frameHeight: 48,
    spriteSX: 5 * 16,
    spriteSY: 9 * 16
      }

  
  cityTileset2.house1 = {
    frameWidth: 64,
    frameHeight: 48,
    spriteSX: 16 * 16,
    spriteSY: 9 * 16        
      }