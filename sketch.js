var fixedRect,movingRect;
var gameobject1 ,  gameobject2 , gameobject3 , gameobject4 ;



function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50,90);
  fixedRect.shapeColor="yellow"
  fixedRect.velocityY=3;
  movingRect = createSprite(100,100,90,50);
  movingRect.shapeColor="yellow"
  movingRect.velocityY=-3;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor="black"

  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor="black"

  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor="black"

  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor="black"
}

function draw() {
  background(255,255,255);
  
  movingRect.y=World.mouseY
  movingRect.x=World.mouseX
  
  if(isTouching(movingRect,gameobject1)){

       movingRect.shapeColor="pink"
       gameobject1.shapeColor="pink"

  }
     
  else{

    movingRect.shapeColor="blue"
    gameobject1.shapeColor="blue"

  }

    bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

 

