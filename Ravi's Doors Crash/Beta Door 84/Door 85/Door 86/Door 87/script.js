let interval;
let position = 0;
let direction = 1;
let isRunning = true;

// Variables for the randomized green bar (target zone)
let targetMin = 40;
let targetMax = 60;

function randomizeTargetZone() {
    // Random width between 10% and 30%
    const width = Math.floor(Math.random() * 21) + 10;
    // Random start between 0 and (100 - width)
    const start = Math.floor(Math.random() * (100 - width));
    targetMin = start;
    targetMax = start + width;
    // Update the green bar's CSS
    $('#target').css({
        left: `${targetMin}%`,
        width: `${width}%`
    });
}

function startGame() {
    $('#message').text('');
    $('#retryBtn').hide();
    position = 0;
    direction = 1;
    isRunning = true;
    $('#marker').css('left', '0%');
    randomizeTargetZone(); // Randomize green bar every time

    interval = setInterval(() => {
        if (!isRunning) return;

        position += direction * 0.5;
        if (position >= 100 - 1) direction = -1;
        if (position <= 0) direction = 1;

        $('#marker').css('left', position + '%');
    }, 10);
}

$('#bar').on('click', () => {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(interval);

    // Check if marker is within the randomized target zone
    if (position >= targetMin && position <= targetMax) {
        $('#message').text('✅ Success! Enzymes safely extracted.');
        setTimeout(() => window.location.href = 'Door 88/index.html', 1500);
    } else {
        $('#message').text('❌ Extraction failed! Try again.');
        $('#retryBtn').show();
    }
});

$('#retryBtn').on('click', startGame);

startGame();