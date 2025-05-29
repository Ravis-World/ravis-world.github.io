$(function () {
    let progress = 0;
    let decreaseInterval;

    function updateProgressDisplay() {
        $('#grind-progress').text(progress);
        $('#progress-bar-fill').css('width', progress + '%');
    }

    function startDecreasing() {
        if (decreaseInterval) return;
        decreaseInterval = setInterval(function () {
            if (progress > 0 && progress < 100) {
                progress -= 1;
                updateProgressDisplay();
                if (progress < 100) {
                    $('#next-btn').hide();
                }
            }
            if (progress === 0 || progress === 100) {
                stopDecreasing();
            }
        }, 230);
    }

    function stopDecreasing() {
        clearInterval(decreaseInterval);
        decreaseInterval = null;
    }

    $('#grind-btn').on('click', function () {
        if (progress < 100) {
            progress += 5;
            if (progress > 100) progress = 100;
            updateProgressDisplay();
            if (progress >= 100) {
                $('#next-btn').show();
            }
        }
        startDecreasing();
    });

    $('#next-btn').on('click', function () {
        window.location.href = 'Door 91/index.html';
    });

    // Initialize display and start decreasing
    updateProgressDisplay();
    startDecreasing();
});