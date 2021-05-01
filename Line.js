class Line{
    constructor(x, y, width, height){
        var options={
            isStatic: true

        }
        this.x=x;
        this.y=y;
        this.line = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.line);
    }
    display(){
        var pos =this.line.position;
      imageMode(CENTER);
       rect(pos.x, pos.y, this.width, this.height);
    }
}