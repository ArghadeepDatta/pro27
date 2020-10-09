
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rop3,rope4,rope5,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Ball(260,600,70);
    bob2 = new Ball(330,600,70);
    bob3 = new Ball(540, 600,70);
    bob4 = new Ball(400,600,70);
	bob5 = new Ball(470,600,70);
  bar = new Roof(400,100,400,50);
  rope1 = new Rope(bob1.body,bar.body,+280,0);
  rope2 = new Rope(bob2.body,bar.body,+280,0);
  rope3 = new Rope(bob3.body,bar.body,+280,0);
  rope4 = new Rope(bob4.body,bar.body,+280,0);
  rope5 = new Rope(bob5.body,bar.body,+280,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bar.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



