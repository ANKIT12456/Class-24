class Log{

    constructor(x,y,height,angle){
       
        var log_option={
            isStatic:false,
            restitution:0.8,
            friction: 2,
            density: 0.5
        }

        this.body=Bodies.rectangle(x,y,15,height,log_option);
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }

    show(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightgreen");
        rect(0,0,15,this.height);
        pop();
    }
}