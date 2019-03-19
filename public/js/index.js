


$('.page-container').fullpage({
  navigation: true,
  navigationPosition: 'right'
});

var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1
});

$('#section1 .box nav a').click(function(e){
  console.log($(e.currentTarget).data('goto'));
  $.fn.fullpage.moveTo($(e.currentTarget).data('goto'));
});
$('.mail').click(function () {
  $('.contact').show(200);
  $('.contact_nav').hide(200);
});
$('.phone').click(function () {
  $('.contact2').show(200);
  $('.contact_nav').hide(200);
});
$('.back').click(function () {
  $('.contact').hide(200);
  $('.contact2').hide(200);
  $('.contact_nav').show(200);
});
