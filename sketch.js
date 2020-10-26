var fixedRect, velocityRect;

function setup() {
  createCanvas(700,575);

  //create the fixed rectangle
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = rgb(255, 188, 0);

  //create the velocity Rectangle
  velocityRect = createSprite(400, 400, 80, 30);
  velocityRect.shapeColor = rgb(230, 10, 10);;

  //Give the velocity to the fixed rectangle and the moving rectangle
  velocityRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {

  background("cyan");  

  if (velocityRect.x - fixedRect.x < fixedRect.width / 2 + velocityRect.width / 2

      && fixedRect.x - velocityRect.x < fixedRect.width / 2 + velocityRect.width / 2) 
      {

        velocityRect.velocityX = velocityRect.velocityX * (-1);
        fixedRect.velocityX = fixedRect.velocityX * (-1);

      }
  if (velocityRect.y - fixedRect.y < fixedRect.height / 2 + velocityRect.height / 2

    && fixedRect.y - velocityRect.y < fixedRect.height / 2 + velocityRect.height / 2)
    {

    velocityRect.velocityY = velocityRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);

    }

  drawSprites();
}