const cellSize = 25;
const snakeHead = {
    image: '',
    position: 0,
    position: 0,
    sizeX: 0,
    sizeY: 0,
};

function drawHead() {
    image(
        snakeHead.image,
        snakeHead.positionX,
        snakeHead.positionY,
        snakeHead.sizeX,
        snakeHead.sizeY,
    );
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

    drawHead();
}

function setupSnake() {
    snakeHead.image = loadImage('assets/images/snakeHead.webp');
}

