class Tanker {
  constructor(angle) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(170,300,50,50,/*small*/angle,options);
     this.width = 90;
     this.height = 100;
     //this.angle = angle;
     this.image = loadImage("assets/canonShooter.jpeg");
     // problem()Matter.Body.setAngle(this.body, angle);
     World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y,this.width,this.height);
      pop();
    };
}
