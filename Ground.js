class Ground{
constructor(x,y,width,height){
    var Options={
        isStatic:true
}
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,this.width,this.height,Options);
 World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
   // imageMode(CENTER);
   // image(this.image,0,0,this.width,this.height);
   fill("brown");
   rectMode(CENTER);
   rect(0,0,this.width,this.height);
    pop();
}
}