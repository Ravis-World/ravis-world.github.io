$(document).ready(function () {
    let correctDrops = 0;
    const totalItems = $('.tool').length;

    // Add retry button dynamically, hidden initially
    const retryBtn = $('<button id="retry-btn" style="display:none; margin-top:20px;">Retry</button>');
    $('body').append(retryBtn);

    retryBtn.on('click', function () {
        location.reload(); // reload page to retry
    });

    $('.tool').on('dragstart', function (e) {
        e.originalEvent.dataTransfer.setData('text/plain', $(this).attr('class'));
        $(this).addClass('dragging');
    });

    $('.bin').on('dragover', function (e) {
        e.preventDefault();
        $(this).addClass('hovered');
    });

    $('.bin').on('dragleave', function () {
        $(this).removeClass('hovered');
    });

    $('.bin').on('drop', function (e) {
        e.preventDefault();
        const data = e.originalEvent.dataTransfer.getData('text/plain');
        const isCleanTool = data.includes('clean');
        const isDirtyTool = data.includes('dirty');
        const isCleanBin = $(this).attr('id') === 'clean-bin';
        const isDirtyBin = $(this).attr('id') === 'dirty-bin';

        if ((isCleanTool && isCleanBin) || (isDirtyTool && isDirtyBin)) {
            correctDrops++;
            $('#result').text(`Correctly sorted: ${correctDrops}/${totalItems}`);

            $('.tool.dragging').remove();
            $('.bin').removeClass('hovered');

            if (correctDrops === totalItems) {
                $('#result').text('Well done! Redirecting to Step 7...');
                setTimeout(() => {
                    window.location.href = 'Break 2/index.html'; // change to your actual Step 7 page URL
                }, 2500);
            }
        } else {
            $('#result').text('Oops! That was incorrect. Please press the Retry button to move items again.');
            retryBtn.show();
            $('.bin').removeClass('hovered');
            $('.tool.dragging').removeClass('dragging');
            // Make all tools non-draggable until retry
            $('.tool').attr('draggable', false);
        }
    });
});
