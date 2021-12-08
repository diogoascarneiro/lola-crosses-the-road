let assetsArray = [];
let imagesLoaded = 0;

/* Declaring assets here. Could have done it with a loop from an array but I wanted to have an identifier to refer to in the code elsewhere, e.g. "lolaSprite" for Lola's sprite */

/* LOLA'S SPRITE <3
* Need to figure out a way to make the frames jump evenly by changing row and column!
*/

let lolaSpriteLeft = new Image();
lolaSpriteLeft.src = "assets/lola-sprite-left.png";
lolaSpriteLeft.onload = () => imagesLoaded++;
lolaSpriteLeft.frameWidth = 55;
lolaSpriteLeft.frameHeight = 35;
lolaSpriteLeft.wOffset = 15;
lolaSpriteLeft.hOffset = -20;
lolaSpriteLeft.row = 1;
lolaSpriteLeft.column = 1;
assetsArray.push(lolaSpriteLeft);

let lolaSpriteRight = new Image();
lolaSpriteRight.src = "assets/lola-sprite-right.png";
lolaSpriteRight.onload = () => imagesLoaded++;
lolaSpriteRight.frameWidth = 55;
lolaSpriteRight.frameHeight = 35;
lolaSpriteRight.wOffset = 15;
lolaSpriteRight.hOffset = -20;
lolaSpriteRight.row = 1;
lolaSpriteRight.column = 13.75;
assetsArray.push(lolaSpriteRight);

function checkAssetsLoaded() {
   if (imagesLoaded === assetsArray.length) {
          return true;
        }
    }