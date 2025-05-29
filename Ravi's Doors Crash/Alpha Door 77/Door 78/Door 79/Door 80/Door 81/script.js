const gridSize = 5;
const totalCells = gridSize * gridSize;

let glitchLoop = [];
let correctIndex;
let currentIndex = 0;
let intervalId;
let locked = false;

const gridEl = document.getElementById('grid');
const statusEl = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const lockBtn = document.getElementById('lockBtn');

// Create grid
for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i + 1;
    gridEl.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');

function randomUniquePositions(count, max) {
    const positions = new Set();
    while (positions.size < count) {
        const rand = Math.floor(Math.random() * max);
        positions.add(rand);
    }
    return [...positions];
}

function highlightDoor(posIndex) {
    cells.forEach(cell => cell.classList.remove('door'));
    cells[posIndex].classList.add('door');
}

function startGlitchLoop() {
    lockBtn.disabled = false;
    startBtn.disabled = true;
    locked = false;
    currentIndex = 0;

    // Highlight first position
    highlightDoor(glitchLoop[currentIndex]);

    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % glitchLoop.length;
        highlightDoor(glitchLoop[currentIndex]);
    }, 240);

    statusEl.textContent = `Watch carefully... Lock it on the stabilised phase.`;
}

function resetPuzzle() {
    clearInterval(intervalId);
    lockBtn.disabled = true;
    startBtn.disabled = false;
    statusEl.textContent = "Incorrect! The glitch scrambles again. Try again when ready.";
    glitchLoop = randomUniquePositions(7, totalCells);
    correctIndex = 3;
}

lockBtn.addEventListener('click', () => {
    if (locked) return;
    if (currentIndex === correctIndex) {
        clearInterval(intervalId);
        locked = true;
        lockBtn.disabled = true;
        startBtn.disabled = true;
        statusEl.textContent = "✅ Success! The door stabilises. You may proceed.";
        setTimeout(() => {
            // Redirect to the next puzzle or level
            window.location.href = "Door 82/index.html"; // Change this to your next puzzle URL
        }, 2000);
    } else {
        resetPuzzle();
    }
});

startBtn.addEventListener('click', () => {
    // New puzzle each time
    glitchLoop = randomUniquePositions(7, totalCells);
    correctIndex = 3;
    startGlitchLoop();
});

// Init (disabled state)
resetPuzzle();
document.getElementById("status").innerHTML = "Watch the door’s movement and lock it at the right moment.";