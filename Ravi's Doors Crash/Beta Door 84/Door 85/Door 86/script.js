$(function () {
  // Shuffle content among cages
  const contents = ['pig', 'chicken', 'slime'];
  const shuffled = contents.sort(() => 0.5 - Math.random());

  $('.cage').each(function (i) {
    $(this).data('content', shuffled[i]);
  });

  $('.cage').on('click', function () {
    if ($(this).hasClass('revealed')) return;

    const content = $(this).data('content');
    $(this).addClass('revealed');

    let emoji = '';
    let msg = '';

    if (content === 'pig') {
      emoji = '🐖';
      msg = 'You found the pig! Good work.';
      $('#continueBtn').fadeIn();
    } else if (content === 'chicken') {
      emoji = '🐔';
      msg = 'That’s just a chicken. Keep looking.';
    } else if (content === 'slime') {
      emoji = '🧪';
      msg = 'Ew, a failed experiment! Definitely not the pig.';
    }

    $(this).text(emoji);
    $('#resultMsg').removeClass('hidden').text(msg);
  });

  $('#continueBtn').on('click', function () {
    window.location.href = 'Door 87/index.html';
  });
});
