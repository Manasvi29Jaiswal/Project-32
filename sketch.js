const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowman1,snowman2,snowman3,snowman4;
var backgroundImg,platform;
var tree1,tree2;
var bird, slingShot;
var gameState="onSling";
var score= 0;



function preload() {
    backgroundImg = loadImage("sprites/snowy background.jpg");
    //treeImage=loadImage("sprites/tree.png")

}


function setup(){
    var canvas = createCanvas(1300,400);
    engine = Engine.create();
    world = engine.world;

    //tree1=createSprite(400,200,20,20);
    //tree1.addImage(treeImage);
    //tree1.scale=0.5;

    ground = new Ground(650,height,1300,40);
    platform = new Platform(150, 305, 300, 170);
    
    
    snowman1 = new Snowman1(550, 350);
    snowman2 = new Snowman2(650, 350);
    snowman3 = new Snowman3(800, 320);
    snowman4 = new Snowman4(950, 300);
    
    
    bird = new Bird(200,50,150,60);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

}


function draw(){
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("black")
    text("Score : " + score, width-300, 50)


    Engine.update(engine);

    //drawSprites();

    snowman1.display();
    snowman2.display();
    snowman3.display();
    snowman4.display();
    platform.display();
    ground.display();
    
    bird.display();
    slingshot.display();   
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}


function keyPressed(){
    if(keyCode === 32&&bird.body.speed<1){
        Matter.Body.setPosition(bird.body, {x: 200, y: 50});
        slingshot.attach(bird.body);
    }
}