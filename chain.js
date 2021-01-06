class Chain{

    constructor(x,y){
        var options={
        bodyA:x,
        pointB:y,
        stiffness:0.004,
        length:10
        }
    
         this.body=Matter.Constraint.create(options)
         World.add(world,this.body)
    }
    drawing(){
        if(this.body.bodyA){
      line (this.body.bodyA.position.x,this.body.bodyA.position.y,
          this.body.pointB.x,this.body.pointB.y)
      }
    }
      fly(){
       console.log("fly")
        this.body.bodyA=null;
      }
      regain(x){
  
        this.body.bodyA=x
      }
  }
