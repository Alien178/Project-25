const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball, dustbin, ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200, 600, 70);

	dustbin = new Box(1200, 385);

	ground = new Ground(width / 2, height - 30);

	Engine.run(engine);

}

function draw() {
	background(255);

	ball.display();
	ground.display();
	dustbin.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		console.log("keyCode");
		Body.applyForce(ball.body, ball.body.position, { x: 276, y: -281 });
	}
}
