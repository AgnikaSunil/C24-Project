// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/ var engine,world;
var canonBall,ground;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
   
    engine = Engine.create();
    world = engine.world;

   

    //canonBall = new CanonBall(600,200);
    ground = new Ground();
    ball1 = new Ball(500,-50,30,"#FF007F");
    ball2 = new Ball(860,50,30,"#FF007F");
    ball3 = new Ball(740,0,30,"#FF007F");
    ball4 = new Ball(620,100,30,"#FF007F");
    ball5 = new Ball(980,-100,30,"#FF007F");
    tanker = new Tanker();
}

function draw() {
    // Remember to update the Matter Engine and set the background.
    background("#3333FF");

    Engine.update(engine);
    //canonBall.display();
    text(mouseX+','+mouseY,200,200);
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    tanker.display();
    keyReleased();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}