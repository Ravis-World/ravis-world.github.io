$(function () {
    let timeLeft = 10;
    let warningGiven = false;
    let timer = setInterval(() => {
        timeLeft--;
        $('#time').text(timeLeft);
        if (timeLeft <= 3 && !warningGiven) {
            $('#brain').addClass('shake');
            warningGiven = true;
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            $('#retry-btn').show();
            $('#brain').removeClass('shake');
        }
    }, 1000);

    $('#brain').on('dragstart', function (e) {
        e.originalEvent.dataTransfer.setData('text/plain', 'brain');
    });

    $('#fake-brain').on('dragstart', function (e) {
        e.originalEvent.dataTransfer.setData('text/plain', 'fake-brain');
    });

    $('#extractor').on('dragover', function (e) {
        e.preventDefault();
    });

    $('#extractor').on('drop', function (e) {
        e.preventDefault();
        let data = e.originalEvent.dataTransfer.getData('text/plain');
        if (data === 'brain') {
            clearInterval(timer);
            $('#next-btn').show();
        } else if (data === 'fake-brain') {
            clearInterval(timer);
            $('#retry-btn').show();
            $('#extractor').css('border', '2px solid red');
        }
    });

    $('#retry-btn').on('click', function () {
        location.reload();
    });

    $('#next-btn').on('click', function () {
        window.location.href = 'Door 92/index.html';
    });

    function randomizePositions() {
        $('#lab > div').each(function () {
            $(this).css({
                position: 'relative',
                left: Math.random() * 200 + 'px',
                top: Math.random() * 40 + 'px'
            });
        });
    }
    randomizePositions();
});