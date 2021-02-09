const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;



function setup() {
	createCanvas(1366.3, 300);
    engine = Engine.create();
	  world = engine.world;
    //Create the Bodies Here.
	   paper= new Paper(50, 200);
     ground= new Ground(683, 220, 1366.3, 10);
    
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

