$(document).ready


$('.header__nav-search, .header__search-is-closed').on("click", function (e) {
  e.preventDefault();
  $('.header__search').toggleClass('header__search-is-opened')
});


$('.header__mobile,.header__mobileNav-is-closed').on("click", function (e) {
  e.preventDefault();
  $('.header__mobileNav').toggleClass('header__mobileNav-is-opened')
});


$('.header__mobileNav-itemSearch').on("click", function (e) {
  e.preventDefault();
  $('.header__search').toggleClass('header__search-is-opened');
  $('.header__mobileNav').toggleClass('header__mobileNav-is-opened');
});

$('.hero').slick({
  infinite: true,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 2000,

});