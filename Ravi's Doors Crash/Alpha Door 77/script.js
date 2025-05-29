var programCode = function(processingInstance) {
    with (processingInstance) {
        size(600, 300);
        frameRate(60);

        // Globals
        var cols = 10, rows = 4;
        var tileSize = 60;
        var soundLevel = 0;
        var maxSound = 100;
        var decayRate = 0.5;
        var playerX = 0;
        var playerY = 1;
        var moveSpeed = 2;
        var slidingBack = false;
        var hasWon = false;
        var winTimer = 0;

        draw = function() {
            background(20);
            drawGrid();
            drawPlayer();
            drawSoundMeter();

            if (hasWon) {
                textSize(32);
                fill(0, 0, 0);
                text("You Win!", width / 2 - 80, height / 2);
                winTimer++;
                if (winTimer > 120) { // ~2 seconds at 60fps
                    window.location.href = "./Door 78/index.html"; // replace with your actual next page
                }
                return;
            }

            if (slidingBack) {
                playerX -= 0.1;
                if (playerX <= 0) {
                    playerX = 0;
                    slidingBack = false;
                    soundLevel = 0;
                }
                return;
            }

            // Decay sound level
            if (soundLevel > 0) {
                soundLevel -= decayRate;
            }
            if (soundLevel < 0) {
                soundLevel = 0;
            }

            // Check fail condition
            if (soundLevel >= maxSound) {
                slidingBack = true;
            }

            // Check win condition
            if (playerX >= cols - 1) {
                hasWon = true;
            }
        };


        var drawGrid = function() {
            for (var y = 0; y < rows; y++) {
                for (var x = 0; x < cols; x++) {
                    var gx = x * tileSize;
                    var gy = y * tileSize;
                    stroke(50);
                    fill(60 + noise(x * 0.3, y * 0.3) * 50, 255, 150);
                    rect(gx, gy, tileSize, tileSize);
                }
            }
        };

        var drawPlayer = function() {
            fill(255, 0, 100);
            ellipse(playerX * tileSize + tileSize / 2, playerY * tileSize + tileSize / 2, 30, 30);
        };

        var drawSoundMeter = function() {
            fill(100);
            rect(10, height - 20, 200, 10);
            fill(255, 0, 0);
            rect(10, height - 20, map(soundLevel, 0, maxSound, 0, 200), 10);
            fill(255);
            text("Sound: " + floor(soundLevel), 220, height - 12);
        };

        keyPressed = function() {
            if (slidingBack) { return; }

            // Movement keys
            if (keyCode === RIGHT && playerX < cols - 1) {
                playerX += 0.2;
                soundLevel += 10;
            } else if (keyCode === LEFT && playerX > 0) {
                playerX -= 0.2;
                soundLevel += 10;
            } else if (keyCode === UP && playerY > 0) {
                playerY -= 1;
                soundLevel += 20;
            } else if (keyCode === DOWN && playerY < rows - 1) {
                playerY += 1;
                soundLevel += 20;
            }
        };

        // Add after keyPressed = function() { ... };
        mousePressed = function() {
            // For mobile: treat tap as right arrow (move right)
            if (!slidingBack && !hasWon && playerX < cols - 1) {
                playerX += 0.2;
                soundLevel += 10;
            }
        };

        // Optional: Add swipe support for up/down/left/right
        var touchStartX, touchStartY;
        canvas.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }
        }, false);

        canvas.addEventListener('touchend', function(e) {
            if (typeof touchStartX === 'number' && typeof touchStartY === 'number') {
                var dx = e.changedTouches[0].clientX - touchStartX;
                var dy = e.changedTouches[0].clientY - touchStartY;
                if (Math.abs(dx) > Math.abs(dy)) {
                    // Horizontal swipe
                    if (dx > 30 && playerX < cols - 1) { // Swipe right
                        playerX += 0.2;
                        soundLevel += 10;
                    } else if (dx < -30 && playerX > 0) { // Swipe left
                        playerX -= 0.2;
                        soundLevel += 10;
                    }
                } else {
                    // Vertical swipe
                    if (dy < -30 && playerY > 0) { // Swipe up
                        playerY -= 1;
                        soundLevel += 20;
                    } else if (dy > 30 && playerY < rows - 1) { // Swipe down
                        playerY += 1;
                        soundLevel += 20;
                    }
                }
            }
            touchStartX = touchStartY = undefined;
        }, false);
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, programCode);