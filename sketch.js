const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var height;

var innerWidth = 540;

var engine, world;
var ground1, ground2, ground3, ground4;

function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(240, 800, 480, 20);
  ground2 = new Ground(480, 400, 20, 800);
  ground3 = new Ground(240, 0, 480, 20);
  ground4 = new Ground(0, 400, 20, 800);
  for (var k = 0; k <= innerWidth; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  for(var p = 40; p <= width; p=p+50){
    plinkos.push(new Plinko(p, 75, 10));
  }
  for(var p = 50; p <= width; p=p+50){
    plinkos.push(new Plinko(p, 150, 5));
  }
  for(var p = 40; p <= width; p=p+50){
    plinkos.push(new Plinko(p, 225, 10));
  }
  for(var p = 50; p <= width; p=p+50){
    plinkos.push(new Plinko(p, 300, 5));
  }
}

function draw() {
  background("black");  
  Engine.update(engine)
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }
  drawSprites();
}
