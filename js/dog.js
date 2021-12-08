class Dog {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.dx = 5;
        this.dy = 5;
        this.width = width;
        this.height = height;
        this.direction = "left";
    }

    /* Movement method. */

          move(key) {
        switch (key) {
          case "ArrowUp":         
            if (this.y > 0 ) {
              this.y -= this.dy;
            }
            
            if (hasCollided(lola)) {
              this.y += this.dy +1;
            }
            break;
          case "ArrowDown":
            if (this.y < canvas.height) {
              this.y += this.dy;
            }
            if (hasCollided(lola)) {
              this.y -= this.dy +1;
            }
            break;
          case "ArrowLeft":
            this.animWalkLeft();
             if (this.x > 0 ) {
            this.x -= this.dx;
             }
             if (hasCollided(lola)) {
              this.x += this.dx +1;
            }
            break;
          case "ArrowRight":
            this.animWalkRight();
            if (this.x < canvas.width - this.width ) {
              this.x += this.dx;
            }
            if (hasCollided(lola)) {
              this.x -= this.dx +1;
            }
            break;
        }
      }

      animWalkLeft() {
        this.direction = "left";
        lolaSpriteLeft.row = 1;
        lolaSpriteLeft.column = 1;
        lolaSpriteLeft.wOffset = 15;
        lolaSpriteLeft.hOffset = -20;
      }

     animWalkRight() {
        this.direction = "right";
        lolaSpriteLeft.row = 1;
        lolaSpriteLeft.column = 1;
        lolaSpriteLeft.wOffset = 15;
        lolaSpriteLeft.hOffset = -20;
      }
      /* drawing animations starts here */
      drawDog() {
        
        /* Cheat Sheet - for studying 
        * ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        * image = source image; sx and sy = the top/left coordinates to "slice" the img; sWidth & sHeight = the bottom/right coordinates to slice the img
        * dx, dy, dwidth & dheight = onde as colocar)
        */
        if (this.direction === "left") {
        let spriteSX = (lolaSpriteLeft.column * lolaSpriteLeft.frameWidth) + lolaSpriteLeft.wOffset;
        let spriteSY = (lolaSpriteLeft.row * lolaSpriteLeft.frameHeight) + lolaSpriteLeft.hOffset;
        ctx.drawImage(lolaSpriteLeft, spriteSX, spriteSY, lolaSpriteLeft.frameWidth, lolaSpriteLeft.frameHeight, this.x, this.y, lolaSpriteLeft.frameWidth, lolaSpriteLeft.frameHeight);
      } else if (this.direction === "right") {
        let spriteSX = (lolaSpriteRight.column * lolaSpriteRight.frameWidth) + lolaSpriteRight.wOffset;
        let spriteSY = (lolaSpriteRight.row * lolaSpriteRight.frameHeight) + lolaSpriteRight.hOffset;
        ctx.drawImage(lolaSpriteRight, spriteSX, spriteSY, lolaSpriteRight.frameWidth, lolaSpriteRight.frameHeight, this.x, this.y, lolaSpriteRight.frameWidth, lolaSpriteRight.frameHeight);
      }

        }
      
}