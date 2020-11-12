class Log {

    constructor(x,y,width,height,angle){
     
        var options={
        restitution : 0.8,
        density:1,
        friction:1
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options) ;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);

    }

    display(){
     var pos=this.body.position ;
     var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke("green");
        strokeWeight(4);

        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();
    }

}




