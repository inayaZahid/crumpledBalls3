
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


paper = new Paper(100,600,10)
   ground = new Ground(400,680,800,20)
  dustbinB = new Dustbin(610,660,100,20);
  dustbinR = new Dustbin(670,620,20,100);
  dustbinL = new Dustbin(550,620,20,100);
  Launcher = new Launcher(paper.body,{x:200,y:600})
  Engine.run(engine);
}


function draw() {

  rectMode(CENTER);
  

  background(0);
  Engine.update(engine)
  ground.display();
  dustbinB.display();
  dustbinR.display();
  dustbinL.display();
  
  paper.display();
  Launcher.display();
  keyPressed(paper);
  drawSprites();
 
}
function keyPressed(paperObject){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:15,y:-15});
  }
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  Launcher.fly();
}
