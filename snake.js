const cellSize = 50;
const directionInitial = 'd';

const snakeHead = {
    direction: null,
    image: null,
    positionX: null,
    positionY: null,
    sizeX: cellSize,
    sizeY: cellSize,
};



function drawHead() {
    angleMode(DEGREES);
    push();
    translate(snakeHead.positionX, snakeHead.positionY);

    if (snakeHead.direction === 'r') {
            rotate(-90);
        }else if (snakeHead.direction === 'l') {
            rotate(90);
        }else if (snakeHead.direction === 'u') {
            rotate(180);
        };

        imageMode(CENTER);
    image(
        snakeHead.image,
        0,
        0,
        snakeHead.sizeX,
        snakeHead.sizeY,
    );
    pop();
    angleMode(RADIANS);
}

function drawGrid() {
    for (var x = 0; x < canvasX; x = x + cellSize) {
        line(x, 0, x, canvasY);
    }

    for (var y = 0; y < canvasY; y = y + cellSize) {
        line(0, y, canvasX, y);
    }
}

function drawSnake() {
    drawGrid();

        if (snakeHead.direction === 'r') {
            snakeHead.positionX += cellSize;
        }else if (snakeHead.direction === 'l') {
            snakeHead.positionX -= cellSize;
        }else if (snakeHead.direction === 'u') {
            snakeHead.positionY -= cellSize;
        }else if (snakeHead.direction === 'd') {
            snakeHead.positionY += cellSize;
        }

    drawHead();
}

function keyPressedSnake() {
    if (key === 'ArrowLeft' && snakeHead.direction !== 'r'){
        snakeHead.direction = 'l';
    }else if (key === 'ArrowRight' && snakeHead.direction !== 'l'){
        snakeHead.direction = 'r';
    }else if (key === 'ArrowDown' && snakeHead.direction !== 'u'){
        snakeHead.direction = 'd';
    }else if (key === 'ArrowUp' && snakeHead.direction !== 'd'){
        snakeHead.direction = 'u';
    }
}

function setupSnake() {
    snakeHead.direction = directionInitial
    snakeHead.image = loadImage('images/snakeHead.png');
    snakeHead.positionX = cellSize * 2 + cellSize / 2
    snakeHead.positionY = cellSize * 2 + cellSize / 2
}


