$('#section1 .box nav a').click(function(e){
  // $(e.currentTarget).data('goto');
  console.log($(e.currentTarget).data('goto'));
});



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
