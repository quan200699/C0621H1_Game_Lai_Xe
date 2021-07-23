let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let car = new Car(10, 10, 50, 100);
let obstacles = [];

function moveCar() {
    switch (event.keyCode) {
        case 37: {
            car.moveLeft();
            break;
        }
        case 38: {
            car.moveUp();
            break;
        }
        case 39: {
            car.moveRight();
            break;
        }
        case 40: {
            car.moveDown();
            break;
        }
    }
    clearCanvas();
    car.drawCar(ctx);
}

function moveObstacle(obstacle) {
    obstacle.moveDown();
}

function moveMulti() {
    for (let obstacle of obstacles) {
        moveObstacle(obstacle)
    }
    clearCanvas();
    drawCanvas();
}

function drawCanvas() {
    car.drawCar(ctx);
    drawMultiObstacle();
}

function initObstacle() {
    for (let i = 0; i < 10; i++) {
        let x = Math.round(Math.random() * 500);
        let y = Math.round(Math.random() * 500);
        let obstacle = new Obstacle(x, y, 30);
        obstacles.push(obstacle);
    }
}

function drawMultiObstacle() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].drawObstacle(ctx);
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, 1000, 500);
}

setInterval(moveMulti, 1000) //ms => 1000ms = 1s
initObstacle()
drawCanvas()
window.addEventListener("keydown", moveCar);
