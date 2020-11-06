
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2,windowHeight/1.5 );


	engine = Engine.create();
	world = engine.world;
   roof1 = new roof(400,100,500,30);
   roof2 = new roof (470,100,100,100);
   roof3 = new roof (540,100,100,100);
   roof4 = new roof (330,100,100,100);
   roof5 = new roof (260,100,100,100);
	bob1 = new bob(400,300,70);
   bob2 = new bob(470,300,70);
   bob3= new bob(540,300,70);
   bob4= new bob(330,300,70);
   bob5= new bob(260,300,70);
   rope1 = new rope(bob1.body,roof1.body,0,0)
   rope2 = new rope(bob2.body,roof2.body,0,0);
   rope3 = new rope(bob3.body,roof3.body,0,0);
   rope4 = new rope(bob4.body,roof4.body,0,0);
   rope5 = new rope(bob5.body,roof5.body,0,0);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}


function keyPressed() {
   if (keyCode === UP_ARROW) {
 
     Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-30,y:10});
 
   
   }
 }
 

