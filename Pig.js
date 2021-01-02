class Pig{

    constructor(x,y){
       
        var pig_option={
            isStatic:false,
            restitution:0.8,
            friction: 0.2,
            density: 0.5
        }

        this.body=Bodies.rectangle(x,y,30,30,pig_option);
        World.add(world,this.body);
    }

    show(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        rect(0,0,30,30);
        pop();
    }
}