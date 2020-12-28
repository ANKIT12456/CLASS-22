const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup(){
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  var ground_option={
    isStatic: true
  }
  ground=Bodies.rectangle(200,380,400,20,ground_option);
  World.add(world,ground);
  var ball_option={
    isStatic:false,
    restitution : 0.5
  }
  ball=Bodies.circle(200,100,12,ball_option);
  World.add(world,ball);


}

function draw(){
  background("red");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,12,12);
  
}