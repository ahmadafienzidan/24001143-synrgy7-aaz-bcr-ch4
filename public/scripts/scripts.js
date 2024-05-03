// alert("hello Slick");
$(document).ready(function () {
  $(".slick-carousel").slick({
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: false,
  });

  $(".prev").click(function () {
    $(".slick-carousel").slick("slickPrev");
  });

  $(".next").click(function () {
    $(".slick-carousel").slick("slickNext");
  });
});
