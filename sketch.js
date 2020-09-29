var rect1,rect2;



function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100,200,10,200);
  rect2 = createSprite(700,200,10,200);
  rect1.shapeColor = "red";
  rect2.shapeColor = "green";
}

function draw() {
  background("blue"); 

  if(rect1.x-rect2.x < rect1.width/2+rect2.width/2 && rect2.x-rect1.x < rect2.width/2+rect1.width/2 
    && rect1.y-rect2.y < rect1.height/2+rect2.height/2 && rect2.y - rect1.y < rect2.height/2+rect1.height/2){

rect1.shapeColor = "yellow";
rect2.shapeColor = "pink";

 }

else{
  rect1.shapeColor = "red";
  rect2.shapeColor = "green";

}
  rect1.y = mouseY;
  rect1.x = mouseX;

  drawSprites();
}