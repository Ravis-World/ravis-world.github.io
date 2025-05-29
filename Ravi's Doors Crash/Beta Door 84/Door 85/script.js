$(function () {
  $('.utensil').on('click', function () {
    if (!$(this).hasClass('cleaned')) {
      $(this).addClass('cleaned');
      $(this).append('<div class="label">Cleaned</div>');
    }

    const total = $('.utensil').length;
    const cleaned = $('.utensil.cleaned').length;

    if (cleaned === total) {
      $('#continueBtn').fadeIn();
    }
  });

  $('#continueBtn').on('click', function () {
    window.location.href = 'Door 86/index.html'; // Placeholder link to next step
  });
});
