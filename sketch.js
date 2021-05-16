var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const  World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    left = Bodies.rectangle(width/2-70,635, 10, 50,{isStatic:true});
	World.add(world,left);
	leftSprite= createSprite(left.position.x,left.position.y,10,50);
	leftSprite.shapeColor="red"
	right= Bodies.rectangle(width/2+70,635,10,50, {isStatic:true});
	World.add(world,right);
	rightSprite= createSprite(right.position.x,right.position.y,10,50);
	rightSprite.shapeColor="red"
	middle = Bodies.rectangle(width/2,650,140,20,{isStatic:true});
	World.add(world,middle);
	middleSprite= createSprite(middle.position.x,middle.position.y,120,20);
	middleSprite.shapeColor="red"

	Engine.run(engine);
  
}
   

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false)

    
  }
}



