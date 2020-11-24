
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var block
var fruitnum = 0;
var Gamestate = PLAY;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {
  FoodGroup = new Group();
obstacleGroup = new Group();
  createCanvas(600,500);
  monkey = createSprite(0,400,20,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  block = createSprite(0,490,9920,10);
 
}


function draw() {
  background(255);
   if(gameState === PLAY){ 
  score = score + Math.round(getFrameRate()/60);
  fill("black");
  text("SURVIVAL TIME: "+score, 470, 20);
  fill("black");
  text("SCORE: "+fruitnum, 400, 20);

  monkey.collide(block);
   
    if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -11; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
   
   banna();
 

drawSprites();
   rocks();
   if(monkey.isTouching(FoodGroup)){
   fruitnum = fruitnum+1;
     FoodGroup.destroyEach();
     obstacleGroup.destroyEach();
 }
  if(monkey.isTouching(obstacleGroup)){
   gameState = END;
 }}
  if(gameState === END){
   
     FoodGroup.destroyEach();
     obstacleGroup.destroyEach();
    fill("black")
    textSize(40);
    text("Game over",260,200);
      FoodGroup.setVelocityXEach=0;
     obstacleGroup.setVelocityXEach=0;
    monkey.velocityX=0;
    monkey.destroy();
  }
}
function rocks(){
  
  if(frameCount%80==0){
    obstacle = createSprite(600,450,0,0)
 obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6
    obstacle.lifeTime=200;
    obstacle.scale=0.2
     obstacleGroup.add(obstacle);
  }
}
function banna(){
  if(frameCount%80==0){
   banana = createSprite(600,Math.round(random(0,400),10,10))
  banana.addImage(bananaImage);
  banana.scale= 0.2
    banana.velocityX=-6
    banana.lifeTime=200
   FoodGroup.add(banana);
  }
}







