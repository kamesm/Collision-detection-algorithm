var lion, plant;

function setup() {
  createCanvas(800,400);
  plant = createSprite(400, 200, 50, 50);
  lion = createSprite(300,300,20,30);
}

function draw() {
  background(255,255,255);  
  lion.x=mouseX;
  lion.y=mouseY;

  if (lion.x-plant.x<plant.width/2+lion.width/2 && plant.x-lion.x<plant.width/2+lion.width/2 && 
    lion.y-plant.y<plant.height/2+lion.height/2 && plant.y-lion.y<plant.height/2+lion.height/2){
    lion.shapeColor = "red";
    plant.shapeColor = "red";
  }
  else{
    lion.shapeColor = "green";
    plant.shapeColor = "green";
  }
  drawSprites();

}