$(document).ready(function() {
  $('.switch .circle').each(function() {
    $(this).css({
      width: $(this).height()+'px'
    });
  });
  $('.switch .stars').each(function() {
    $(this).css({
      width: $(this).height()+'px'
    });
  });
  $('.switch .circle div').each(function() {
    $(this).css({
      width: $(this).height()+'px'
    });
  });

  $('.switch').click(function() {
    if ($(this).hasClass('day')) {

      $(this).addClass('night');
      $(this).removeClass('day');

      $(this).children('.circle').css({
        left: $(this).width() - $(this).children('.circle').outerWidth() - parseInt($(this).children('.circle').css('borderWidth')),
      });

    } else if ($(this).hasClass('night')) {
      $(this).removeClass('night');
      $(this).addClass('day');

      $(this).children('.circle').css({
        left: parseInt($(this).children('.circle').css('borderWidth')),
      });

    } else {
      $(this).addClass('night');
      $(this).removeClass('day');

      $(this).children('.circle').css({
        left: $(this).width() - $(this).children('.circle').outerWidth() - parseInt($(this).children('.circle').css('borderWidth')),
      });
    }
  });
});
