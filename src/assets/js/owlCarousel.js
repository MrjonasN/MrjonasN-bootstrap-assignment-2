$(document).ready(function() {
  $(".owl-product-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1100: {
        items: 3,
      },
    },
  });



$(".owl-testamonial-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    navText: [
      '<i class="fa fa-chevron-left arrow-white" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right arrow-white" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        nav: false,
      },
      900: {
        nav: true,
        autoplay: true
      }
    },
  });




});
