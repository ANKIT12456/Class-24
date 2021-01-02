class Bird{

    constructor(x,y){
       
        var bird_option={
            isStatic:false,
            restitution:0.8,
            friction: 0.2,
            density: 0.5
        }

        this.body=Bodies.rectangle(x,y,50,50,bird_option);
        World.add(world,this.body);
    }

    show(){
        var pos=this.body.position;
        var angle=this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,50,50);
        pop();
    }
}