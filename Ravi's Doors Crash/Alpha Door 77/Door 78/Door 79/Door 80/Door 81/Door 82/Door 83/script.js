const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const mobileControls = document.getElementById('mobile-controls');

let player, monster, exit, keys, timeLeft, gameOver, win, timerInterval, gameStarted = false;

function resetGame() {
    player = { x: 50, y: 180, size: 20, speed: 3 };
    monster = { x: 550, y: 180, size: 30, speed: 1.2 }; // slower monster
    exit = { x: 580, y: 180, size: 20 };
    keys = {};
    timeLeft = 15; // 15 seconds
    gameOver = false;
    win = false;
}

function update() {
    if (gameOver) return;

    // Player movement
    if (keys['ArrowUp']) player.y -= player.speed;
    if (keys['ArrowDown']) player.y += player.speed;
    if (keys['ArrowLeft']) player.x -= player.speed;
    if (keys['ArrowRight']) player.x += player.speed;

    // Clamp player to canvas
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));

    // Monster chases player
    if (monster.x > player.x) monster.x -= monster.speed;
    if (monster.x < player.x) monster.x += monster.speed;
    if (monster.y > player.y) monster.y -= monster.speed;
    if (monster.y < player.y) monster.y += monster.speed;

    // Check for collision with monster
    if (Math.abs(player.x - monster.x) < 20 && Math.abs(player.y - monster.y) < 20) {
        gameOver = true;
        win = false;
    }

    // Check for reaching exit
    if (Math.abs(player.x - exit.x) < 20 && Math.abs(player.y - exit.y) < 20) {
        gameOver = true;
        win = true;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw exit
    ctx.fillStyle = '#0f0';
    ctx.fillRect(exit.x, exit.y, exit.size, exit.size);

    // Draw player
    ctx.fillStyle = '#00f';
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // Draw monster
    ctx.fillStyle = '#f00';
    ctx.fillRect(monster.x, monster.y, monster.size, monster.size);

    // Draw timer
    ctx.fillStyle = '#fff';
    ctx.font = '20px sans-serif';
    ctx.fillText(`Time Left: ${Math.max(0, timeLeft).toFixed(1)}s`, 10, 30);

    if (gameOver) {
        ctx.fillStyle = win ? '#0f0' : '#f00';
        ctx.font = '40px sans-serif';
        ctx.fillText(win ? 'You Escaped!' : 'Caught!', 200, 200);
        setTimeout(() => {
            if (win) {
                window.location.href = 'Break 1/index.html'; // Change to your next level URL
            } else {
                window.location.reload();
            }
        }, 3000);
    }
}

function gameLoop() {
    update();
    draw();
    if (!gameOver) requestAnimationFrame(gameLoop);
}

function startGame() {
    resetGame();
    canvas.style.display = '';
    startBtn.style.display = 'none';
    gameStarted = true;
    // Show mobile controls if on mobile
    if (isMobile()) {
        mobileControls.style.display = 'block'; // <-- FIX: use 'block' instead of ''
    } else {
        mobileControls.style.display = 'none';
    }
    // Timer
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

function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

// Keyboard controls
document.addEventListener('keydown', e => {
    if (!gameStarted) return;
    keys[e.key] = true;
});
document.addEventListener('keyup', e => {
    if (!gameStarted) return;
    keys[e.key] = false;
});

// Mobile controls
document.querySelectorAll('.ctrl-btn').forEach(btn => {
    btn.addEventListener('touchstart', e => {
        if (!gameStarted) return;
        e.preventDefault();
        const dir = btn.getAttribute('data-dir');
        if (dir === 'up') keys['ArrowUp'] = true;
        if (dir === 'down') keys['ArrowDown'] = true;
        if (dir === 'left') keys['ArrowLeft'] = true;
        if (dir === 'right') keys['ArrowRight'] = true;
    });
    btn.addEventListener('touchend', e => {
        if (!gameStarted) return;
        e.preventDefault();
        const dir = btn.getAttribute('data-dir');
        if (dir === 'up') keys['ArrowUp'] = false;
        if (dir === 'down') keys['ArrowDown'] = false;
        if (dir === 'left') keys['ArrowLeft'] = false;
        if (dir === 'right') keys['ArrowRight'] = false;
    });
});

startBtn.addEventListener('click', startGame);

// Hide canvas and controls initially
canvas.style.display = 'none';
mobileControls.style.display = 'none';
resetGame();