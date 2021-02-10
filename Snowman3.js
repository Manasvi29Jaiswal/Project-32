class Snowman3 extends BaseClass {
    constructor(x, y){
      super(x,y,150,150);
      this.image = loadImage("sprites/snowman.png");
      this.Visibility=255;
    }
  
  display(){
  
  //console.log(this.body.speed) 
  
  if(this.body.speed<6){
  
    super.display()
  
  }
  
  else{
  
    World.remove(world,this.body)
    push()
    this.Visibility=this.Visibility-5
    tint(255,this.Visibility)
    image(this.image,this.body.position.x,this.body.position.y,150,150)
    pop();
  
  }
  
  }


  score(){
    if (this.Visibility < 0 && this.Visibility > -1505){
      score++;
    }
}
  
  };