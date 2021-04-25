const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, world;
var bg;
var ground;
var Compartment1,Compartment2,Compartment3,Compartment4,Compartment5,Compartment6;
var chain1,chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  world= myEngine.world;

  ground = new Ground(600,380,1200,20);

  Compartment1 = new Compartment(50,170,50,50);
  Compartment2 = new Compartment(150,170,50,50);
  Compartment3 = new Compartment(250,170,50,50);
  Compartment4 = new Compartment(350,170,50,50);
  Compartment5 = new Compartment(450,170,50,50);
  Compartment6 = new Compartment(550,170,50,50);

  chain1 = new chain(Compartment1.body,Compartment2.body);
  chain2 = new chain(Compartment2.body,Compartment3.body);
  chain3 = new chain(Compartment3.body,Compartment4.body);
  chain4 = new chain(Compartment4.body,Compartment5.body);
  chain5 = new chain(Compartment5.body,Compartment6.body);

  rock1 = new rock(1100,200,100,100);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  Compartment1.show();
  Compartment2.show();
  Compartment3.show();
  Compartment4.show();
  Compartment5.show();
  Compartment6.show();

  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();

  ground.show();

  rock1.show();

  var collision = Matter.SAT.collides(Compartment6.body,rock1.body)

  if(collision.collided){
    flag = 1;
  }

  if(flag === 1)
  {
    textSize(30);
    stroke('red');
    fill('blue');
    text('BOOM',500,200);
    crashSound.play();
  }
  
  }

  function keyPressed(){
    if(keyCode === RIGHT_ARROW)
    {
      Matter.Body.applyForce(Compartment6.body,{x: Compartment6.body.position.x,y:Compartment6.body.position.y},{x:0.5,y:0});
      trainSound.play();
    }
  }