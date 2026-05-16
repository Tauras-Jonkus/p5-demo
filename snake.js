const cellSize = 50;
const directionInitial = 'r';


const tail = []

const snakeHead = {
    cellX: null,
    cellY: null,
    direction: null,
    image: null,
    sizeX: cellSize,
    sizeY: cellSize
};

const snakeHeadBody = {
    cellX: null,
    cellY: null,
    image: null,
    sizeX: cellSize,
    sizeY: cellSize
};

const food = {
    cellX: null,
    cellY: null,
    image: null,
    sizeX: cellSize,
    sizeY: cellSize
};

function drawHead() {
    angleMode(DEGREES);
    push();
    translate(
        cellSize * snakeHead.cellX + cellSize / 2,
        cellSize * snakeHead.cellY + cellSize / 2
    );

    if (snakeHead.direction === 'r') {
        rotate(-90);
    } else if (snakeHead.direction === 'l') {
        rotate(90);
    } else if (snakeHead.direction === 'u') {
        rotate(180);
    }

    imageMode(CENTER);

    image(
        snakeHead.image,
        0,
        0,
        snakeHead.sizeX,
        snakeHead.sizeY
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

    image(
        food.image,
        cellSize * food.cellX,
        cellSize * food.cellY,
        food.sizeX,
        food.sizeY
    );

    if (snakeHead.direction === 'r') {
        snakeHead.cellX += 1;
    } else if (snakeHead.direction === 'l') {
        snakeHead.cellX -= 1;
    } else if (snakeHead.direction === 'u') {
        snakeHead.cellY -= 1;
    } else if (snakeHead.direction === 'd') {
        snakeHead.cellY += 1;
    }

    if (snakeHead.cellX === food.cellX && snakeHead.cellY === food.cellY){
    food.cellX = getRandomFoodCellPosition().x;
    food.cellY = getRandomFoodCellPosition().y;

    tail.push({
        cellX: (0).cellX,
        cellY: (0).cellY
    });

    }

    drawHead();
}

function drawTail() {
    let index = 0;

    while (index <= tail.length - 2) {
        tail[index].cellX = tail[index + 1].cellX;
        tail[index].cellY = tail[index + 1].cellY;
    }
    tail[tail.length - 1 ].cellX = snakeHead.cellX;
    tail[tail.length - 1 ].cellY = snakeHead.cellY;

    tail.forEach(body) == (
        image(
        snakeHeadBody.image,
        body.cellX * cellSize,
        body.cellY * cellSize,
        snakeHeadBody.sizeX,
        snakeHeadBody.sizeY

        )
    )

}

function keyPressedSnake() {
    if (key === 'ArrowLeft' && snakeHead.direction !== 'r') {
        snakeHead.direction = 'l';
    } else if (key === 'ArrowRight' && snakeHead.direction !== 'l') {
        snakeHead.direction = 'r';
    } else if (key === 'ArrowUp' && snakeHead.direction !== 'd') {
        snakeHead.direction = 'u';
    } else if (key === 'ArrowDown' && snakeHead.direction !== 'u') {
        snakeHead.direction = 'd';
    }
}

function getRandomFoodCellPosition() {
    const countCellX = canvasX / cellSize;
    const countCellY = canvasY / cellSize;

    return {
        x: Math.floor(Math.random() * countCellX),
        y: Math.floor(Math.random() * countCellY)
    };
}

function setupSnake() {
    food.image = loadImage('images/food.png');
    food.cellX = getRandomFoodCellPosition().x;
    food.cellY = getRandomFoodCellPosition().y;

    snakeHead.direction = directionInitial;
    snakeHead.image = loadImage('images/snakeHead.png');
    snakeHead.cellX = 2;
    snakeHead.cellY = 2;

    snakeHeadBody.image = loadImage('images/snakeBody.png');

    tail.length = 0;

    tail.push({
        cellX: null,
        cellY: null
    });
}