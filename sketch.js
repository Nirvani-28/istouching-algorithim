var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(300,200,80,110);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600,200,70,90);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y -fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y -movingRect.y <= movingRect.height/2 + fixedRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor ="red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor ="green";
}
  
  drawSprites();
}
