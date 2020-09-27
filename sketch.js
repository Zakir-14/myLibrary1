var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200, 100, 50, 80);
  gameObject1.shapeColor = "blue";
  gameObject1.debug = true;
  gameObject2 = createSprite(200, 300,80,30);
  gameObject2.shapeColor = "blue";
  gameObject2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  gameObject2.y = mouseY;
  gameObject2.x = mouseX;

  bounceOff(movingRect,fixedRect);
  if(isTouching(gameObject1,gameObject2)){
    gameObject1.shapeColor = "red"
    gameObject2.shapeColor = "red"
  }else{
    gameObject1.shapeColor = "blue"
    gameObject2.shapeColor = "blue"
  }
  drawSprites();
}

