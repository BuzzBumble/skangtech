$(document).ready(function() {

  var options1 = {
      strings: ["Developer", "Engineer", "Creator"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: true
  }

  var aspiring = new Typed(".asp-content", options1);

  $('.nav-links').click(function() {
    $(this).toggleClass('active');
    $('.links').toggleClass('drop');
  })
})
