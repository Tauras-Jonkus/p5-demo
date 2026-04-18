class Bouncable {
    constructor(color, x, y, size, speed, direction) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.direction = direction;
    }

    draw() {
        fill(this.color);
        circle(this.x, this.y, this.size);

        this.x = this.x + sin(PI / 180 * this.direction) * this.speed;
        this.y = this.y + cos(PI / 180 * this.direction) * this.speed;

        if (this.x + this.size / 2 >= 400 || this.x - this.size / 2 <= 0) {
            this.direction = this.direction * -1;
        }

        if (this.y + this.size / 2 >= 400 || this.y - this.size / 2 <= 0) {
            this.direction = (this.direction - 180) * -1;
        }
    }
}

var bouncables = [];

function setupBouncables() {
    bouncables = []

    for (var i = 0; i < 25; i++) {
        bouncables.push(new Bouncable(
            color(random(30, 255), random(30, 255), random(30, 255)),
            random(50, 350), 
            random(50, 350), 
            random(15, 80), 
            random(2, 6), 
            random(0, 360)
        ));
    }
}

function drawBouncables() {
    for (var i = 0; i < bouncables.length; i++) {
        bouncables[i].draw();
    }
}
