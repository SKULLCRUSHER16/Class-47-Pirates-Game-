class Boat{
    constructor(x,y,width,height,boatPos){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.boatposition=boatPos
        this.image=loadImage("assets/boat.png");
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        var pos=this.body.position
        
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,this.boatposition,this.width,this.height);
        noTint();
        pop();

    }
}