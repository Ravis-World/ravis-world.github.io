$(document).ready(function () {
    let segments = ['#seg1', '#seg2', '#seg3', '#seg4', '#seg5'];
    let currentSegment = 0;

    function updateProgress() {
        if (currentSegment < segments.length) {
            let id = segments[currentSegment];

            if (id === '#seg4') {
                $('#minigame').removeClass('hidden');
                startMinigame();
            } else {
                $(id).addClass('completed');
                currentSegment++;
                setTimeout(updateProgress, 1000);
            }
        } else {
            alert('Synthesis Complete!');
            window.location.href = 'Door 95/index.html';
        }
    }

    let scale = 1;
    let direction = 1;
    let interval;

    function startMinigame() {
        scale = 0.7;
        direction = 1;
        interval = setInterval(() => {
            scale += 0.05 * direction;
            if (scale > 1.5 || scale < 0.7) direction *= -1;
            $('#circle').css('transform', `translate(-50%, -50%) scale(${scale})`);
        }, 50);
    }

    $('#tap').click(function () {
        if (scale >= 1.1 && scale <= 1.3) {
            $('#result').text('✅ Success!');
            clearInterval(interval);
            $('#minigame').addClass('hidden');
            $('#seg4').removeClass('error').addClass('completed');
            currentSegment++;
            setTimeout(updateProgress, 1000);
        } else {
            $('#result').text('❌ Try again!');
        }
    });

    updateProgress();
});