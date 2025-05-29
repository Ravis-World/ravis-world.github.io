let collected = 0;

$(document).ready(function () {
  $('.container').on('click', function () {
    const type = $(this).data('type');

    if (type === 'heavy') {
      $(this).text('✅').off('click');
      collected++;
      $('#status').text(`Heavy Water Collected: ${collected} / 3`);

      if (collected === 3) {
        $('#nextStep').prop('disabled', false);
      }
    } else {
      $(this).text('❌').fadeOut(600);
    }
  });

  $('#nextStep').on('click', function () {
    window.location.href = 'Door 89/index.html'; // Update with actual path
  });
});
