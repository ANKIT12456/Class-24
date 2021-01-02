const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world,ground,bird;

var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
function setup(){
  createCanvas(900,500);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground()
  box1=new Box(600,400,50,50);
  box2=new Box(730,400,50,50);
  box3=new Box(600,200,50,50);
  box4=new Box(730,200,50,50);
  box5=new Box(665,100,50,50);
  pig2=new Pig(665,200);
  pig1=new Pig(665,400);
  log2=new Log(662,190,189,PI/2);
  log1=new Log(662,280,189,PI/2);
  log3=new Log(630,70,100,PI/7);
  log4=new Log(700,70,110,-PI/7);
  bird=new Bird(100,100);


}

function draw(){
  background("black");
  Engine.update(engine);
  ground.display();
  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  pig2.show();
  pig1.show();
  log2.show();
  log1.show();
  log3.show();
  log4.show();
  bird.show();

 
}