const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const mobileControls = document.getElementById('mobile-controls');

let player, monster, exit, keys = {};
let timeLeft, gameOver, win, timerInterval;
let gameStarted = false;

// Set up game state
function resetGame() {
    player = { x: 50, y: 180, size: 20, speed: 3 };
    monster = { x: 550, y: 180, size: 30, speed: 1 };
    exit = { x: 580, y: 180, size: 20 };
    keys = {};
    timeLeft = 15;
    gameOver = false;
    win = false;
}

// Update game logic
function update() {
    if (gameOver) return;

    // Player movement
    if (keys['ArrowUp']) player.y -= player.speed;
    if (keys['ArrowDown']) player.y += player.speed;
    if (keys['ArrowLeft']) player.x -= player.speed;
    if (keys['ArrowRight']) player.x += player.speed;

    // Clamp to canvas
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));

    // Monster chases player
    if (monster.x > player.x) monster.x -= monster.speed;
    if (monster.x < player.x) monster.x += monster.speed;
    if (monster.y > player.y) monster.y -= monster.speed;
    if (monster.y < player.y) monster.y += monster.speed;

    // Collision detection
    if (Math.abs(player.x - monster.x) < 20 && Math.abs(player.y - monster.y) < 20) {
        gameOver = true;
        win = false;
    }

    // Win check
    if (Math.abs(player.x - exit.x) < 20 && Math.abs(player.y - exit.y) < 20) {
        gameOver = true;
        win = true;
    }
}

// Draw game scene
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Exit
    ctx.fillStyle = '#0f0';
    ctx.fillRect(exit.x, exit.y, exit.size, exit.size);

    // Player
    ctx.fillStyle = '#00f';
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // Monster
    ctx.fillStyle = '#f00';
    ctx.fillRect(monster.x, monster.y, monster.size, monster.size);

    // Timer
    ctx.fillStyle = '#fff';
    ctx.font = '20px sans-serif';
    ctx.fillText(`Time Left: ${Math.max(0, timeLeft).toFixed(1)}s`, 10, 30);

    // End message
    if (gameOver) {
        ctx.fillStyle = win ? '#0f0' : '#f00';
        ctx.font = '40px sans-serif';
        ctx.fillText(win ? 'You Escaped!' : 'Caught!', 200, 200);
        setTimeout(() => {
            if (win) {
                window.location.href = 'Break 1/index.html';
            } else {
                window.location.reload();
            }
        }, 3000);
    }
}

// Game loop
function gameLoop() {
    update();
    draw();
    if (!gameOver) requestAnimationFrame(gameLoop);
}

// Start game
function startGame() {
    resetGame();
    gameStarted = true;
    startBtn.style.display = 'none';
    mobileControls.style.display = 'block'; // ✅ Always show

    // Start timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!gameOver) {
            timeLeft -= 0.1;
            if (timeLeft <= 0) {
                gameOver = true;
                win = false;
            }
        }
    }, 100);

    gameLoop();
}

// Keyboard input
document.addEventListener('keydown', (e) => {
    if (!gameStarted) return;
    keys[e.key] = true;
});
document.addEventListener('keyup', (e) => {
    if (!gameStarted) return;
    keys[e.key] = false;
});

// Touch input
document.querySelectorAll('.ctrl-btn').forEach(btn => {
    btn.addEventListener('touchstart', (e) => {
        if (!gameStarted) return;
        e.preventDefault();
        const dir = btn.getAttribute('data-dir');
        keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = true;
    });
    btn.addEventListener('touchend', (e) => {
        if (!gameStarted) return;
        e.preventDefault();
        const dir = btn.getAttribute('data-dir');
        keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = false;
    });
});

startBtn.addEventListener('click', startGame);

// Setup on load
canvas.style.display = ''; // show canvas by default
mobileControls.style.display = 'none';

resetGame();
draw(); // draw static scene

// Setup on load
canvas.style.display = ''; // canvas is always visible
resetGame();
draw(); // draw static scene