class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':0.1,
        'density':0.1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    console.log('Box X= '+x+'  Y='+y);
    World.add(world, this.body);
    this.visibilty=255
  }
  score(){
    if(this.visibilty<0 && this.visibilty>-50){
      score++
    }
  }
  display(){
    if(this.body.speed<2){

    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
    }
else{
  World.remove(world,this.body)
  this.visibilty=this.visibilty-5
}

  }
};