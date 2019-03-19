

$('#enter').click(function () {
  var login = $('#login').val();
  var pass = $('#password').val();
  console.log(login, pass);
  if (login == '123' && pass == 'asd') {
    $('.section').show();
    $('#section0').hide();
  }else {
    alert('Логгин или пароль были введины не правильно.')
  }
});



$('#home-slider .button').click(function (e) {
  console.log($(e.currentTarget).data('editor'));
  var object = $(e.currentTarget);
  console.log(object.data('id'));
  if (['add','delete'].includes(object.data('editor'))) {
    $.ajax({
      type: 'post',
      url: "/"+object.data('editor'),
      data: {id : object.data('id')}
    }).done(function() {
      reload_slider();
    });
  }
});

$('#home-slider .input').blur(function (e) {
  $('#home-slider .input').each(function (index, elem) {
    if ($(elem).data('id') == $(e.currentTarget).data('id')) {
      var object = {
        id: $(elem).data('id'),
        name: $(elem).data('name'),
        val: $(elem).val()
      };
      console.log(object);
      $.ajax({
        type:'post',
        url: "/edit",
        data: object,
      })
      .error(function(e) {
        console.log(e);
      });
    }
  });
});


function reload_slider() {
  console.log('reload');
  $.ajax({
    type:'post',
    url: "/get_html",
    data: {name:'slider'},
  })
  .done(function(e) {
    console.log(e);
    $('#home-slider').html(e);


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

    $('#home-slider .button').click(function (e) {
      console.log($(e.currentTarget).data('editor'));
      var object = $(e.currentTarget);
      if (['add','delete'].includes(object.data('editor'))) {
        $.ajax({
          type: 'post',
          url: "/"+object.data('editor'),
          context: object.data('id')
        }).done(function() {
          reload_slider();
        });
      }
    });

    $('#home-slider .input').blur(function (e) {
      $('#home-slider .input').each(function (index, elem) {
        if ($(elem).data('id') == $(e.currentTarget).data('id')) {
          var object = {
            id: $(elem).data('id'),
            name: $(elem).data('name'),
            val: $(elem).val()
          };
          console.log(object);
          $.ajax({
            type:'post',
            url: "/edit",
            data: object,
          })
          .error(function(e) {
            console.log(e);
          });
        }
      });
    });


  });
}

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
