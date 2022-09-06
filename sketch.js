var box 
function setup() {
  createCanvas(800,800);
  box = createSprite(300,300,40,40)
  box.shapeColor="blue"
}

function draw() 
{
  background(30);
  if (keyIsDown(LEFT_ARROW)){
    box.x=box.x-2
  }
  if (keyIsDown(RIGHT_ARROW)){
    box.x=box.x+2
  }
  if (keyIsDown(UP_ARROW)){
    box.y=box.y-2
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y=box.y+2
  }
drawSprites()
}




