let manholeY;
let manholeHeight = 60;
let manholeWidth = 100;
let manholeOpened = false;
let groundY = 300;
let dragging = false;
let dragOffsetY = 0;
let gravity = 3;
let canvas;
let redirectScheduled = false; // flag to avoid multiple redirects

function setup() {
    canvas = createCanvas(400, 400);
    centerCanvas();
    frameRate(30);
    manholeY = groundY;
}

function draw() {
    background(30);

    // Define oneThird and twoThirds here:
    let oneThird = groundY - 150 / 3;         // 50 pixels above ground
    let twoThirds = groundY - (150 * 2 / 3); // 100 pixels above ground

    if (!manholeOpened) {
        // Apply gravity if not dragging and manhole is lifted
        if (!dragging && manholeY < groundY) {
            manholeY += gravity;
            if (manholeY > groundY) {
                manholeY = groundY;  // stop at ground level
            }
        }
    }

    // Draw the road
    fill(60);
    rect(0, groundY, width, height - groundY);

    // Draw the manhole
    fill(100);
    rect(width / 2 - manholeWidth / 2, manholeY, manholeWidth, manholeHeight);

    fill(255);
    textSize(14);
    textAlign(CENTER);

    if (manholeY <= groundY - 150) {
        manholeOpened = true;

        fill(0, 255, 0);
        textSize(20);
        text("Manhole Opened!", width / 2, 100);

        // Schedule redirect once
        if (!redirectScheduled) {
            redirectScheduled = true;
            setTimeout(function () {
                window.location.href = './Down The Manhole/index.html';
            }, 3000);
        }

    } else if (manholeY <= twoThirds) {
        text("Almost there! Keep pulling!", width / 2, 80);
    } else if (manholeY <= oneThird) {
        text("We can do it!", width / 2, 80);
    } else if (manholeY < groundY) {
        text("Pull harder...", width / 2, 80);
    } else {
        text("Pull up the manhole to open", width / 2, 50);
    }
}

function mousePressed() {
    if (
        mouseX > width / 2 - manholeWidth / 2 &&
        mouseX < width / 2 + manholeWidth / 2 &&
        mouseY > manholeY &&
        mouseY < manholeY + manholeHeight
    ) {
        dragging = true;
        dragOffsetY = mouseY - manholeY;
    }
}

function mouseDragged() {
    if (dragging && !manholeOpened) {
        let mouseMovement = (mouseY - pmouseY);
        if (mouseMovement < 0) {
            let liftPower = 0.05;
            manholeY += mouseMovement * liftPower;
            manholeY = constrain(manholeY, groundY - 160, groundY);
        }
    }
}

function mouseReleased() {
    dragging = false;
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas(); // Re-centre when browser is resized
}
