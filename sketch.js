var cop;
var corona;
var human1, human2, human3, human4, human5;
var cop1, cop2, cop3, cop4, cop5, cop6, cop7; 


function preload(){
  co1 = loadImage("co1.png");
  cop1 = loadImage("Cop1.jpeg");
  cop2 = loadImage("Cop2.jpeg");
  cop3 = loadImage("Cop3.jpeg");
  cop4 = loadImage("Cop4.jpeg");
  cop5 = loadImage("Cop5.jpeg");
  cop6 = loadImage("Cop6.jpeg");
  cop1 = loadImage("cop7.png");
}

function setup() {
  createCanvas(600, 200);
  cop = createSprite(10, 150)
  human1 = createSprite();
  human2 = createSprite();
  human3 = createSprite();
  human4 = createSprite();
  human5 = createSprite();
  corona = createSprite();
}

function draw() {
  if(keyIsDown(UP_ARROW) && cop.index !== null){
    cop.distance +=50
    cop.update();
  }
  
  drawSprites();
}