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

  $('.nav-item a').click(function() {
    if ($(this).attr("href") != '#links') {
      var id = $(this).attr("href");
      id = id.substring(1, id.length);
      var container = $(`.${id}-container`);
      var active = $('.active-container');
      $('.navbar h1 a').removeClass('inactive');
      if (!container.hasClass('active-container')) {
        active.addClass('vishidden')
        active.one('transitionend', function(e) {
          active.addClass('dispnone');
          active.removeClass('active-container');
          container.removeClass('dispnone');
          setTimeout(function() {
            container.removeClass('vishidden');
          }, 50)
          container.addClass('active-container');
        })
      }
    }
  })

  $('.navbar h1 a').click(function() {
    var id = $(this).attr('href');
    id = id.substring(1, id.length);
    console.log(`.$(id)-container`);
    var active = $('.active-container');
    var container = $('.header-container');
    $(this).addClass('inactive')
    active.addClass('vishidden');
    active.one('transitionend', function(e) {
      active.addClass('dispnone');
      active.removeClass('active-container');
      container.removeClass('dispnone');
      setTimeout(function() {
        container.removeClass('vishidden');
      }, 50)
      container.addClass('active-container');
    })
  })
})
