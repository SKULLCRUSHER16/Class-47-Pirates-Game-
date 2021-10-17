const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tower;
var cannon;
var ground;
var background_IMG;
var CB;
var balls=[];
var boat;
var boats=[];

function preload(){
background_IMG=loadImage("assets/background.gif")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
tower = new Tower(150,350,160,310);
angle=-PI/4;
cannon= new Cannon(180,110,100,50,angle);
ground=new Ground(0,height-1,width*2,1);
boat=new Boat(width,height-100,200,200,-100);
}

function draw(){
    background(0);
    Engine.update(engine);
    image(background_IMG,0,0,width,height);
   tower.display();
   cannon.display();
   ground.display();
   Matter.Body.setVelocity(boat.body,{x:-0.9,y:0});
   showBoats();

  for(var i=0;i<balls.length;i++){
showcannonballs(balls[i],i);
for(var j=0;j<boats.length;j++){
    if(balls[i]!== undefined && boats[j]!== undefined){
        var collision=Matter.SAT.collides(balls[i].body,boats[j].body)
        if(collision.collided){

        boats[j].remove(j);
        Matter.World.remove(world,balls[i].body);
        balls.splice(i,1);
        i--;
        }
    }
}
  }
}
function keyPressed(){
    if(keyCode === DOWN_ARROW){
        CB=new CannonBall(cannon.x,cannon.y);
        balls.push(CB);
    }
}
function showcannonballs(ball,index){
ball.display();
if(ball.body.position.x>=width||ball.body.position.y>=height-50){
    Matter.World.remove(world,ball.body);
    balls.splice(index,1);
}
}
function keyReleased(){
    if(keyCode === DOWN_ARROW){
        balls[balls.length-1].fire();
    }
}
// function showBoats(){
//     if(boats.length>0){
//         if(boats.length<4 &&
//        boats[boats.length-1].body.position.x<width-300){
//            var positions=[-130,-100,-120,-80];
//            var position=random(positions);
//            var boat=new Boat(width,height-100,200,200,position);
//            boats.push(boat);
//        }
// for(var i=0;i<boats.length;i++)
// Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0});
// boats[i].display();    
// }
// else{
//     var boat=new Boat(width,height-100,200,200,position);
//     boats.push(boat);
// }
// }

function showBoats() {
    if (boats.length > 0) {
      if (
        boats[boats.length - 1] === undefined ||
        boats[boats.length - 1].body.position.x < width - 300
      ) {
        var positions = [-40, -60, -70, -20];
        var position = random(positions);
        var boat = new Boat(width, height - 100, 170, 170, position);
  
        boats.push(boat);
      }
  
      for (var i = 0; i < boats.length; i++) {
        if (boats[i]) {
          Matter.Body.setVelocity(boats[i].body, {
            x: -0.9,
            y: 0
          });
  
          boats[i].display();
        } else {
          boats[i];
        }
      }
    } else {
      var boat = new Boat(width, height - 60, 170, 170, -60);
      boats.push(boat);
    }
  }