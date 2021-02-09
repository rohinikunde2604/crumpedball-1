class Ground
{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var groundpose = this.body.position;

        push()
        rectMode(CENTRE)
        strokeWeight(1);
        fill("white");
        pop()

    }
}