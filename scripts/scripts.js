$(document).ready


$('.search').on("click", function (e) {
  e.preventDefault();
  $('.header__search').toggleClass('is-opened')
});

$('.header__search-closer').on("click", function (e) {
  e.preventDefault();
  $('.header__search').toggleClass('is-opened')
});

$('.header__mobile, .header__overlay').on("click", function (e) {
  e.preventDefault();
  $('.nav').toggleClass('is-opened'),
  $('.header__mobile').toggleClass('header__mobile-opened')

});


$('.hero').slick({
prevArrow: '<button id="prev" type="button" class="hero__previous"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
nextArrow: '<button id="next" type="button" class="hero__next"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'

});
