let rungHeight = 40;
let rungs = [];
let birdY;
let brokenCount = 0;
let gameOver = false;
let victory = false;
let canvas;
let endTimeoutSet = false; // flag to avoid multiple setTimeout calls

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('game-container');

    // Center canvas horizontally by CSS
    canvas.style('display', 'block');
    canvas.style('margin-left', 'auto');
    canvas.style('margin-right', 'auto');

    birdY = 60;
    generateRungs();
}

function draw() {
    background(20);
    drawLadder();
    drawBird();

    if (gameOver) {
        textAlign(CENTER);
        textSize(28);

        if (!endTimeoutSet) {
            endTimeoutSet = true; // prevent multiple timers

            if (victory) {
                fill(50, 255, 100);
                text("You made it down safely!", width / 2, height / 2);
                setTimeout(() => {
                    window.open("./Down The Ladder/index.html", "_self");
                }, 3000);
            } else {
                fill(255, 50, 50);
                text("Ladder Collapsed!", width / 2, height / 2);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        } else {
            // keep showing the message
            fill(victory ? [50, 255, 100] : [255, 50, 50]);
            text(victory ? "You made it down safely!" : "Ladder Collapsed!", width / 2, height / 2);
        }
        noLoop();
    }
}

function descend(steps) {
    if (gameOver) return;

    for (let i = 0; i < steps; i++) {
        let nextRung = floor((birdY - 60) / rungHeight) + 1;

        if (nextRung < rungs.length) {
            if (rungs[nextRung] === "cracked" && random() < 0.5) {
                brokenCount++;
                if (brokenCount >= 3) {
                    gameOver = true;
                    return;
                }
            }
            birdY += rungHeight;

            if (nextRung >= rungs.length - 1) {
                gameOver = true;
                victory = true;
                return;
            }
        }
    }
}

function drawLadder() {
    strokeWeight(4);
    for (let i = 0; i < rungs.length; i++) {
        let y = 60 + i * rungHeight;
        if (rungs[i] === "cracked") {
            stroke(255, 100, 100);
        } else {
            stroke(180);
        }
        line(width / 2 - 50, y, width / 2 + 50, y);
    }

    stroke(100);
    line(width / 2 - 50, 0, height);
    line(width / 2 + 50, 0, height);
}

function drawBird() {
    fill(255, 0, 0);
    ellipse(width / 2, birdY - 10, 30);
}

function generateRungs() {
    rungs = []; // reset

    // First, decide which indexes (except last) will be cracked
    // We want at least 3 cracked rungs among the first 9 rungs

    // Create an array of rung indices except last (0 to 8)
    let indices = [];
    for (let i = 0; i < 9; i++) {
        indices.push(i);
    }

    // Shuffle indices array (Fisher–Yates shuffle)
    for (let i = indices.length - 1; i > 0; i--) {
        let j = floor(random(i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Select first 3 indices to be cracked (at least)
    let crackedIndices = indices.slice(0, 3);

    // Optionally, add a chance for more cracked rungs beyond the 3 minimum
    for (let i = 3; i < indices.length; i++) {
        if (random() < 0.3) {
            crackedIndices.push(indices[i]);
        }
    }

    // Build the rungs array for 10 rungs total
    for (let i = 0; i < 10; i++) {
        if (i === 9) {
            // Last rung always stable
            rungs.push("stable");
        } else if (crackedIndices.includes(i)) {
            rungs.push("cracked");
        } else {
            rungs.push("stable");
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, 400);
}