function setup() {
  createCanvas(400, 400);

  frameRate(2)
}

function draw() {
  background(
  Math.floor(Math.random() * 255),
  Math.floor(Math.random() * 255),
  Math.floor(Math.random() * 255)
  );

  var cicle_path_radius = 100;
  var cicle_path_centre_x = 200;
  var cicle_path_centre_y = 200;
  var time = millis() / 1000;

  var cicle_path_centre_x = cicle_path_radius*cos(time) + cicle_path_centre_x;
  var cicle_path_centre_y = cicle_path_radius*sin(time) + cicle_path_centre_y;

  circle(cicle_path_centre_x, cicle_path_centre_y, 100)
}
