const cellSize = 25;
const directionInitial = 'd';

const snakeHead = {
    image: null,
    positionX: 50,
    positionY: 50,
    sizeX: 50,
    sizeY: 50,
};

let direction = directionInitial;

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

        if (direction === 'r') {
            snakeHead.positionX += cellSize;
        }else if (direction === 'l') {
            snakeHead.positionX -= cellSize;
        }else if (direction === 'u') {
            snakeHead.positionY -= cellSize;
        }else if (direction === 'd') {
            snakeHead.positionY += cellSize;
        }

    drawHead();
}

function keyPressedSnake() {
    if (key === 'ArrowLeft' && direction !== 'r'){
        direction = 'l';
    }else if (key === 'ArrowRight' && direction !== 'l'){
        direction = 'r';
    }else if (key === 'ArrowDown' && direction !== 'u'){
        direction = 'd';
    }else if (key === 'ArrowUp' && direction !== 'd'){
        direction = 'u';
    }
}

function setupSnake() {
    snakeHead.image = loadImage('images/snakeHead.png');
}

