$(document).ready(function() {

  var options1 = {
    strings: ["Software Engineer",
      "Full-Stack Web Developer",
      "Compulsive Learner",
      "Bouldering Addict",
      "Video Game Enthusiast"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    showCursor: true
  };

  var aspiring = new Typed("#typed", options1);

  $('.tabs li').click(function() {
    var tab = $(this).data('tab');

    $('.tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-content div').removeClass('active-content');
    $('div[data-content="' + tab + '"]').addClass('active-content');
  });

});
