$(document).ready(() => {
  let scene = $('#scene')[0];
  let parallax = new Parallax(scene, {
    relativeInput: true,
    limitX: 90,
    limitY: 20,
    frictionX: 0.075,
    frictionY: 0.075,
    scalarX: 6,
    scalarY: 6,
    clipRelativeInput: true
  });

  let mainBuilding = $('#menu-building');
  mainBuilding.mouseenter(() => {
    //parallax.disable();
    $('#background, #buildings-far, #buildings-near').addClass("blurred");
    parallax.scalar(2, 1);
  });

  mainBuilding.mouseleave(() => {
    //parallax.enable();
    $('#background, #buildings-far, #buildings-near').removeClass("blurred");
    parallax.scalar(6, 6);
  });
});
