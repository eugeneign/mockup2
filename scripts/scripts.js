$(document).ready


$('.search, .header__search-closer').on("click", function (e) {
  e.preventDefault();
  $('.header__search').toggleClass('is-opened'),
  $('.hero i').toggleClass('is-closed')
});



$('.nav__item-mobile').on("click", function (e) {
  e.preventDefault();
  $('.nav').toggleClass('is-opened'),
  $('.nav__item-mobile').toggleClass('nav__item-mobile-opened'),
  $('.hero i').toggleClass('is-closed'),
  $('.nav__item-mobile:after').toggleClass('is-opened')
});


$('.hero').slick({
prevArrow: '<button id="prev" type="button" class="hero__previous"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
nextArrow: '<button id="next" type="button" class="hero__next"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',


});
