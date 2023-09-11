$(function () {
  const nexticon = '<i class="fa fa-chevron-right"></i>';
  const previcon = '<i class="fa fa-chevron-left"></i>';

  $(".populer-slider").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    navText: [previcon, nexticon],
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  $(".new-arrivals-slider").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    navText: [previcon, nexticon],
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
  $(".social-media-slider").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    padding: 15,
    nav: false,
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
        loop: false,
      },
    },
  });
});
