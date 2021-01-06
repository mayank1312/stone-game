class Mango  {
    constructor(x,y){
      var options={
        isStatic:true
      }
      
      
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      this.image=loadImage("mango.png")
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