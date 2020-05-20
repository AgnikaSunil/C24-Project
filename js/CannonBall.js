class CannonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.circle(x,y,10,options);
    this.width = 40;
    this.image = loadImage("assets/cannonBall.png");
    World.add(world,this.body);
  };

  display(height){
    var pos = this.body.position;
    this.height = height;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  };
};
