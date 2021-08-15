var p5 = {
  Visable: {
    cursor: function (col1 = "white"/*color for the triangle*/, col2 = "white"/*color for the line*/) {
      
      push();
      if(mouseX !== 0 && mouseY !== 0) {
        
        //hides the cursor
        noCursor();
        
        //line
        stroke(col2);
        strokeWeight(1);
        line(mouseX + 5, mouseY + 5, mouseX + 17, mouseY + 15);
        
        //triangle
        fill(col1);
        strokeWeight(1);
        triangle(mouseX, mouseY, mouseX + 15, mouseY + 5, mouseX + 5, mouseY + 15);
        
      }else {
        mouseX = width / 2;
        mouseY = height / 2;
      }
      pop();
    },
    object: function(dx, dy, dw, dh) {
      
      class Object {
        constructor(x = width / 2, y = width / 2, w = 50, h = 50) {
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.img = "";
          this.turn = 0;
          this.func = {}
        }
        show() {
          if(!this.img) {
            rectMode(CENTER);
            rect(this.x, this.y, this.w, this.h);
          }
          
        }
      }
      
      return new Object(dx, dy, dw, dh);
    }
  }
};
