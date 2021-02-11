var gameObject1,gameObject2;
var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  gameObject1 = createSprite(400,200,180,50);
  gameObject2 = createSprite(600,300,70,90);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(isColliding(gameObject2,movingRect))
  {
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";

}
else{movingRect.shapeColor="green";
      gameObject2.shapeColor="green";

}
  drawSprites();
}

