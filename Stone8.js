class Stone8 extends BaseClass {
    constructor(x, y) {
        super(x, y, 30, 30);
        this.image = loadImage("stone.png");

    }
    display(){
      //  this.body.position.x = mouseX;
      //  this.body.position.y = mouseY;
        super.display();
      }
}
