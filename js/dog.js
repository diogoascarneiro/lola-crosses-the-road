class Dog {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.dx = 5;
        this.dy = 5;
        this.width = width;
        this.height = height;
        // this.img = new Image();
        // this.img.src = '';
    }

    /* Movement method. Need to check how to handle collisions ( && (!detectCollision(testObst)) ) - 
    some of them should result in game overs but others should allow for movement away from the object when collision occurs */

          move(key) {
        switch (key) {
          case "ArrowUp":         
            if (this.y > 0 ) {
              this.y -= this.dy;
            }
            
            if ( detectCollision(testObst)) {
              this.y += this.dy +1;
            }
            break;
          case "ArrowDown":
            if (this.y < canvas.height) {
              this.y += this.dy;
            }
            if (detectCollision(testObst)) {
              this.y -= this.dy +1;
            }
            break;
          case "ArrowLeft":
             if (this.x > 0 ) {
            this.x -= this.dx;
             }
             if (detectCollision(testObst)) {
              this.x += this.dx +1;
            }
            break;
          case "ArrowRight":
            if (this.x < canvas.width - this.width ) {
              this.x += this.dx;
            }
            if (detectCollision(testObst)) {
              this.x -= this.dx +1;
            }
            break;
        }
      }
 
      drawDog() {
          /*temporary, for testing*/
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }

}