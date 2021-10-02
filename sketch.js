var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

// Loading animations and images
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

//creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
  



//leftBoundary.invisible = false;
//leftBoundary.visible = true;
// leftBoundary.invisible = true;

//Making left and right Boundary and making Invisible
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  //Moving with Mouse
    boy.x = World.mouseX;
  
  //Making Edges
    edges= createEdgeSprites();

  //Making Collide 
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
  
 
  //Making Infiniteground
    if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
