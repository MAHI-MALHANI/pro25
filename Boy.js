class Boy{

    constructor(x, y, width, height){
        var options={
            isStatic=true
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = 20;
        this.height = 70;
        this.image=loadImage("Boy.png");
        World.add(world, this.body);
        
    }
    display(){
        // var pos =this.body.position;
       imageMode(CENTER);

       image(this.image, 50, 350, this.width, this.height);
    }
}
