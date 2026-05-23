var setupScript = function() {};
var drawScript = function() {};
var keyPressedScript = function() {};

var canvasX = 400;
var canvasY = 400;


function setup() {
  var  canvas = createCanvas(canvasX, canvasY);
  canvas.parent('p5-canvas')
}

function draw() {
  background(220);

  drawScript();
}

function keyPressed() {
  keyPressedScript();
}