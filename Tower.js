class Tower{
constructor(x,y,width,height){
 var Options={
     isStatic:true
 }   
 this.image=loadImage("assets/tower.png");
 this.width-width;
 this.height=height;
 this.body=Bodies.rectangle(x,y,this.width,this.height,Options);
 World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}
}