const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box0;
var ground;
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(900, 370);
  World.add(world, box1);

  box2 = new Box(919, 370);
  World.add(world, box2);

  box3 = new Box(938, 370);
  World.add(world, box3);

  box4 = new Box(957, 370);
  World.add(world, box4);

  box5 = new Box(909, 340);
  World.add(world, box5);
  
  box6 = new Box(928, 340);
  World.add(world, box6);

  box7 = new Box(947, 340);
  World.add(world, box7);

  box8 = new Box(918, 310);
  World.add(world, box8);

  box9 = new Box(937, 310);
  World.add(world, box9);

  box0 = new Box(927, 280);
  World.add(world, box0);

  ground = new Ground(600,height,1200,20);
  World.add(world, ground);
}

function draw() {
  background("yellow");  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box0.display();

  ground.display();

  drawSprites();
}
