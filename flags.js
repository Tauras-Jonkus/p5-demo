var frequency = 0;

function flagSegment(color, xInitial, yInitial, segmentWidth, segmentHeight, param1, param2) {
  fill(color);
  beginShape();
  
  for (let x = xInitial; x < xInitial + segmentWidth; x++) {
    let y = map(sin(frequency + x * param1), -param2, param2, yInitial, yInitial + segmentHeight);
    vertex(x, y);
  }

  for (let x = xInitial + segmentWidth; x > xInitial; x--) {
    let y = map(sin(frequency + x * param1), -param2, param2, yInitial + segmentHeight, yInitial + segmentHeight * 2);
    vertex(x, y);
  }

  endShape(CLOSE);
}

function drawFlags() {
    flagSegment('yellow', 50, 50, 250, 50, 0.03, 5);
    flagSegment('green', 50, 100, 250, 50, 0.03, 5);
    flagSegment('red', 50, 150, 250, 50, 0.03, 5);

    frequency += 0.05;
}