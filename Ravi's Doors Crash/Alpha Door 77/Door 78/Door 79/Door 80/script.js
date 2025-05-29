const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const cols = 10;
const rows = 10;
const tileSize = 40;

const eggImg = new Image();
eggImg.src = 'egg.png'; // Your egg wall image

const exitImg = new Image();
exitImg.src = 'exit.png'; // Your exit tile image

const maze = [];
const path = [];

let player = { x: 0, y: 0 };
let exit = { x: cols - 1, y: rows - 1 };

const dirs = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 }
];

function generateMaze() {
    for (let y = 0; y < rows; y++) {
        maze[y] = [];
        for (let x = 0; x < cols; x++) {
            maze[y][x] = 1; // Wall
        }
    }

    function carve(x, y) {
        maze[y][x] = 0;
        path.push({ x, y });

        dirs.sort(() => Math.random() - 0.5);
        for (let { x: dx, y: dy } of dirs) {
            let nx = x + dx * 2;
            let ny = y + dy * 2;
            if (nx >= 0 && ny >= 0 && nx < cols && ny < rows && maze[ny][nx] === 1) {
                maze[y + dy][x + dx] = 0;
                carve(nx, ny);
            }
        }
    }

    carve(0, 0);

    // Choose a random open tile as the exit (but not at 0,0)
    const openTiles = path.filter(p => !(p.x === 0 && p.y === 0));
    exit = openTiles[Math.floor(Math.random() * openTiles.length)];
}

function drawMaze() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (maze[y][x] === 1) {
                ctx.drawImage(eggImg, x * tileSize, y * tileSize, tileSize, tileSize);
            } else {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }

    // Draw exit
    ctx.drawImage(exitImg, exit.x * tileSize, exit.y * tileSize, tileSize, tileSize);

    // Draw player
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(
        player.x * tileSize + tileSize / 2,
        player.y * tileSize + tileSize / 2,
        tileSize / 3,
        0, Math.PI * 2
    );
    ctx.fill();
}

function movePlayer(dx, dy) {
    let nx = player.x + dx;
    let ny = player.y + dy;

    if (nx >= 0 && ny >= 0 && nx < cols && ny < rows) {
        if (maze[ny][nx] === 0) {
            player.x = nx;
            player.y = ny;

            if (player.x === exit.x && player.y === exit.y) {
                alert("You made it out of the maze!");
                window.location.href = "Door 81/index.html"; // Change this to your actual next page
            }
        } else {
            player = { x: 0, y: 0 }; // Reset to start
        }
    }

    drawMaze();
}

window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') movePlayer(-1, 0);   // Right key moves left
    if (e.key === 'ArrowLeft') movePlayer(1, 0);     // Left key moves right
    if (e.key === 'ArrowUp') movePlayer(0, 1);       // Up key moves down
    if (e.key === 'ArrowDown') movePlayer(0, -1);    // Down key moves up
});

eggImg.onload = () => {
    exitImg.onload = () => {
        generateMaze();
        drawMaze();
    };
    setTimeout(() => {
        // Reload the page to ensure images are loaded before drawing
        if (!maze.length) {
            window.location.reload();
        }
    }, 100); // Delay to ensure images are loaded before drawing
};

// Ensure DOM is loaded before attaching button listeners
document.addEventListener('DOMContentLoaded', () => {
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    if (up && down && left && right) {
        // Touch events for mobile
        up.addEventListener('touchstart', e => { e.preventDefault(); movePlayer(0, 1); });    // Up button moves down
        down.addEventListener('touchstart', e => { e.preventDefault(); movePlayer(0, -1); }); // Down button moves up
        left.addEventListener('touchstart', e => { e.preventDefault(); movePlayer(1, 0); });  // Left button moves right
        right.addEventListener('touchstart', e => { e.preventDefault(); movePlayer(-1, 0); }); // Right button moves left

        // Click events for desktop
        up.addEventListener('click', () => movePlayer(0, 1));    // Up button moves down
        down.addEventListener('click', () => movePlayer(0, -1)); // Down button moves up
        left.addEventListener('click', () => movePlayer(1, 0));  // Left button moves right
        right.addEventListener('click', () => movePlayer(-1, 0)); // Right button moves left
    }
});