var gameState="play";

var tower,towerimage;
var door,doorimg,doorsGroup;
var climber,climberimg,climbersGroup;
var ghost,ghostimg;
var invisible,invisibleGroup;
var swoky;


function preload(){
  towerimage=loadImage("tower.png");
  doorimg=loadImage("door.png");
  
  climberimg=loadImage("climber.png");
  
  ghostimg=loadImage("ghost-standing.png");
  
  swoky=loadSound("spooky.wav");
  
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerimage);
  tower.velocityY=3;
 
  ghost=createSprite(300,350);
  ghost.addImage("ghost",ghostimg);
  ghost.scale=0.4;
  
  
  
 // invisible.createSprite()
  
  doorsGroup=new Group();
 invisibleGroup= new Group();
  climbersGroup=new Group();
}

function draw(){
  background("black");
  
  if(gameState==="play");{
    
  
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-4;
  }
  
  
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+4;
  }
  
  if(tower.y>600){
  tower.y=300;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-5; 
  }
  
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  doors();
 // swoky.loop();
   
  if(ghost.y>600|| invisibleGroup.isTouching (ghost)){
    ghost.destroy();
    gameState="end";
  }
  }
  

  
  
  
  drawSprites();
  if (gameState==="end"){
    fill("red");
    textSize(30);
    text("GAME OVER",220,300);
  }
}

function doors(){
if(frameCount%150===0){
 var door=createSprite(200,60);
  door.addImage(doorimg);
  door.velocityY=3;
  door.x=Math.round(random(150,400));
  door.lifetime=200;
  
  ghost.depth=door.depth;
  ghost.depth=ghost.depth+1;
  
  var climber=createSprite(200,120);
  climber.addImage(climberimg);
  climber.velocityY=3;
  climber.x=door.x;
  climber.lifeTime=200;
  
   var invisible=createSprite(200,130);
  invisible.velocityY=+3;
  
  invisible.width=climber.width;
  invisible.height=5;
  invisible.x=door.x;
  
  doorsGroup.add(door);
  climbersGroup.add(climber);
  invisibleGroup.add(invisible);
  
 
  
}
 
}