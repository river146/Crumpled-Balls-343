class Ball{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image=loadImage("paper.png");
        this.body = Matter.Bodies.circle(x, y, 40,options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);

        rotate(angle);
        image(this.image, 0,0,30,30);
        pop();
      }
}