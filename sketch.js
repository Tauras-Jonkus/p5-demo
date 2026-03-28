var bouncables = [];

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < random(20, 100); i++){
    bouncables.push(new Bouncable(
    color(random(0, 255), random(0, 255), random(0,255)),
    random(50, 350),
    random(50, 350),
    random(15, 50),
    random(0.3, 4),
    random(0, 360),
  ));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < bouncables.length; i++){
    bouncables[i].draw();
  }
}
