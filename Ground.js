class Ground{

constructor(){

    var ground_options={

        isStatic:true 
    }

    this.body=Bodies.rectangle(450,490,900,40,ground_options);
    //this.width=400;
    //this.height=20;
    World.add(world,this.body);

}

display(){

    var pos=this.body.position;
    fill ('brown');
    rectMode(CENTER);
    rect(pos.x,pos.y,900,40);
}


}