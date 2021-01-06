class BaseClass {

  constructor(x, y, width, height) {
    var options = {
        
        'isStatic':false,
        'restitution':1,
        'friction':0.6
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("WhatsApp Image 2020-12-31 at 18.24.03.jpeg");
    World.add(world, this.body);
  }
  display(){
  
    push();
    translate(this.body.position.x, this.body.position.y);
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}