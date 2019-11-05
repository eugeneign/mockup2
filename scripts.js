$(document).ready

  $('.header__nav-search').on("click", function(e) {
   e.preventDefault(); $('.header__search').toggleClass('header__search-open')
  });
  
$('.header__search-close').on("click", function(e) {
   e.preventDefault(); $('.header__search').toggleClass('header__search-open')
  });
  
  $('.header__mobile').on("click", function(e) {
   e.preventDefault(); $('.header__mobileNav').toggleClass('header__mobileNav-open')
  });
  
$('.header__mobileNav-close').on("click", function(e) {
   e.preventDefault(); $('.header__mobileNav').toggleClass('header__mobileNav-open')
  });
  
$('.header__mobileNav-itemSearch').on("click", function(e) {
   e.preventDefault(); $('.header__search').toggleClass('header__search-open'); $('.header__mobileNav').toggleClass('header__mobileNav-open'); 
  });

