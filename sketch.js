const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,division;
var score=0;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

  //createSprite(400, 200, 50, 50);
  ground=new Ground(400,350,50,50);
  division=new Division(10,400,100,300);
  division1=new Division(110,400,100,300)
  division2= new Division(210,400,100,300)
  division3= new Division(310,400,100,300)
  ball=new Ball(50,100,50,50)
}

function draw() {
  background(0);  
  Engine.update(engine)

  noStroke();
  textSize(35);
  fill("white")
  text("score", score, width-300,50)

  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  ball.display();


  drawSprites();
}

function mousePressed(){
  if(gameState!=="end")
  {
    count++;
    ball=new Ball(mouseX,10,10,10)
  }
  
}

if(ball!=null){
  ball.display()
  if(particle.body.position.y>760){
  if(particle.body.x<300){
    score=score+500;
    ball=null
    if(count>=5) gameState="end";
  }
  }
}