
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var paper;
var ground;
var box1, box2, box3;
var slingshot;

function preload(){
	dustBin = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
  paper = new Paper(650,600,20);
  slingshot = new Launcher(paper.body,{x:650,y:600});
  ground = new Ground(400,690,800,20);
  box1 = new Box(150,640,20,100);
  box2 = new Box(250,640,20,100);
  box3 = new Box(200,675,100,20);
  
  groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
    fill(0);
	noStroke();
  box1.display();
  box2.display();
  box3.display();
  image(dustBin,130,580,140,100);
  paper.display();
  slingshot.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
 if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body, paper.body.position, {x:-60, y:-50});
 }
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  slingshot.fly(); 
}


