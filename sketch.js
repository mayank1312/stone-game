
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite,ground,treeSprite,tree,treeImage,boy,boyImage,mango3,mango2,mango,mango4,mango5,mango1,Stone7,chain1,gameState
function preload()
{
	treeImage=loadImage("tree.png")
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	gameState="onsling"
	groundSprite=createSprite(400,600,800,20)
	groundSprite.shapeColor=color(0)

	treeSprite=createSprite(600,412,30,150)
	treeSprite.addImage(treeImage)
	treeSprite.scale=0.3
    boy=createSprite(200,533,30,100)
	boy.addImage(boyImage)
	boy.scale=0.1
	
	//Create the Bodies Here.
	
	mango3=new Mango(520,340)
	mango2=new Mango(600,330)
	mango=new Mango(560,270)
	mango1=new Mango(730,370)
	mango4=new Mango(650,250)
	mango5=new Mango(680,340)
	stone7=new Stone8(150,480)
	chain1=new Chain(stone7.body,{x:150,y:480})


	Engine.run(engine);
	ground=Bodies.rectangle(400,600,800,20)
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  drawSprites();
  
  mango3.display();
  mango2.display();
  mango.display();
  mango1.display();
  mango4.display();
  mango5.display();
 stone7.display();
 chain1.drawing();
  
 detectCollision(stone7,mango1);
 detectCollision(stone7,mango);
 detectCollision(stone7,mango2);
 detectCollision(stone7,mango3);
 detectCollision(stone7,mango4);
 detectCollision(stone7,mango5);
 
}
function mouseDragged(){
    
    if(gameState!=="launched"){
     Matter.Body.setPosition(stone7.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased(){
    chain1.fly();
    gameState="launched"
}
function keyPressed(){
  if(keyCode===32){
	Matter.Body.setPosition(stone7.body,{x:mouseX,y:mouseY})
	chain1.regain(stone7.body);
	chain1.attach(stone7.body)
	gameState="onsling"
  }
}
function detectCollision(stonei,mangol){
mangoBodyPosition=mangol.body.position
stoneBodyPosition=stonei.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-mangol+stonei){

Matter.Body.setStatic(mangol.body,false)
}
}


