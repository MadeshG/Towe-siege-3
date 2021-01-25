const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg
var engine, world;
var gameState="onSling"
var score = 0
function preload(){
    polygon = loadImage("polygon.png")
    getBackgroundImg()
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1200,400);


    ground = new Ground(300, 400, 1800, 100);
    stand=new Ground(600,250,60,10)
    box1 = new Box(585,230,30,30)
    box2 =new Box (585,210,30,30)
    box3 = new Box (615,230,30,30)
    box4 = new Box (615,210,30,30)
    box5 = new Box (600,180,30,30)
    ball = Bodies.circle(100,100,20)
    stand2 = new Ground(400,300,100,10)
    box6 = new Box(380,270,30,30)
    box7 = new Box(410,270,30,30)
    box8 = new Box(380,250,30,30)
    box9 = new Box(410,250,30,30)
    box10 = new Box(400,230,30,30)
    World.add(world,ball)
    slingshot = new SlingShot(this.ball,{x:100,y:200})
}


function draw(){
    if(backgroundImg)
    background(backgroundImg)
    Engine.update(engine);
   // polygon1.display()
   textSize(20)
   fill ("white")
   text ("score"+score ,200,50)
   ground.display()
   stand.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   stand2.display()
    box6.display()
   slingshot.display()
   box7.display()
   box8.display()
   box9.display()
   box10.display()
   box1.score()
   box2.score()
   box3.score()
   box4.score()
   box5.score()
   box6.score()
   box7.score()
   box8.score()
   box9.score()
   box10.score()
    imageMode (CENTER)
    image(polygon,ball.position.x,ball.position.y,40,40)
    drawSprites()
}

function mouseDragged(){
    if(gameState==="onSling"){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launch"
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "download2.png";
    }
    else{
        bg = "download.png";
    }

    backgroundImg = loadImage(bg);
    backgroundImg.scale=0.5
}
