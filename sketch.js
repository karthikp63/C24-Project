
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper = new Paper(20,400,20)
	ground = new Ground(400,690,800,30)
	dustbin1=new Dustbin(650,610,20,100)
	dustbin2=new Dustbin(700,660,100,20)
	dustbin3=new Dustbin(750,610,20,100)
}


function draw() {
  
  background(0);
  

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-85})
	}
}


