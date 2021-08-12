var shipImg1, shipImg2, shipImg3, shipImg4, spaceImg, iss;
var shipSprite, issSprite;
function preload() {
  spaceImg = loadImage("images/spacebg.jpg");
  iss = loadImage("images/iss.png");
  shipImg1 = loadImage("images/spacecraft1.png");
  shipImg2 = loadImage("images/spacecraft2.png");
  shipImg3 = loadImage("images/spacecraft3.png");
  shipImg4 = loadImage("images/spacecraft4.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  issSprite = createSprite(400, 200, 50, 50);
  issSprite.addImage(iss)
  shipSprite = createSprite(800, windowHeight - 200, 50, 50)
  shipSprite.addImage(shipImg1)
  shipSprite.scale = 0.5
}

function draw() {
  background(spaceImg);  
  drawSprites();
  if (keyDown(UP_ARROW)) {
    shipSprite.y -= 8;
    shipSprite.addImage(shipImg2)
  }
  if (keyDown(DOWN_ARROW)) {
    shipSprite.y += 8;
    shipSprite.addImage(shipImg2)
  }
  if (keyDown(LEFT_ARROW)){
    shipSprite.x -= 8;
    shipSprite.addImage(shipImg3)
  }
  if (keyDown(RIGHT_ARROW)) {
    shipSprite.x += 6;
    shipSprite.addImage(shipImg4)
  }
  issSprite.debug = false
  shipSprite.debug = false
  issSprite.setCollider("circle", -60, 35, 10)
  shipSprite.setCollider("circle", 0, -300, 50)
  if (shipSprite.isTouching(issSprite)) {
    shipSprite.x = issSprite.x - 70
    shipSprite.y = issSprite.y + 190
    shipSprite.velocityX = 0
    shipSprite.velocityY = 0
    fill(255)
    textSize(20)
    text("Congratulations, hero! You did it!", width / 2, 100)
    noFill()
  }
  console.log("x: " + shipSprite.x + ", y: " + shipSprite.y)
}