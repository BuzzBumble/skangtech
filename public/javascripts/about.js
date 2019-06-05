$(function() {
  $('.about-item').click(function() {
    $(`.about-item:not(#${$(this).attr('id')})`).addClass('about-inactive');
    if ($(this).attr('id') == 'option-1') {
    }
    $(this).addClass('about-active');

    setTimeout(() => {

      $('#about-selection').addClass('dispnone');
      console.log("hid the thing");

    }, 500);

    setTimeout(() => {

      $(`#about-${$(this).attr('id')}`).removeClass('vishidden')
        .removeClass('dispnone');

    }, 750);

  });
});
