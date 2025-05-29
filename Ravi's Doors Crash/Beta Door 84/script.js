$(function () {
    const totalTaps = 30;
    let currentTaps = 0;

    $('#rock').on('click', function () {
        if (currentTaps < totalTaps) {
            currentTaps++;
            const percent = (currentTaps / totalTaps) * 100;
            $('#progress-bar').css('width', percent + '%');
            $('#status').text(`Taps: ${currentTaps} / ${totalTaps}`);

            if (currentTaps >= totalTaps) {
                $('#status').text('Silver collected!');
                $('#nextBtn').fadeIn();
            }
        }
    });

    $('#nextBtn').on('click', function () {
        window.location.href = 'Door 85/index.html';
    });
});