// guardian testimonial
$('.testimonial_container').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
});

  $('.prev').click(function(){
    $(this).addClass('bg_arrw');
    $('.next').removeClass('bg_arrw');
  })
  $('.next').click(function(){
    $(this).addClass('bg_arrw');
    $('.prev').removeClass('bg_arrw');
  })

  // professional trainer
$('.trainer_slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  slidesToShow: 4, 
  slidesToScroll: 2,
  prevArrow: $('.previous'),
  nextArrow: $('.next_btn'),
  responsive: [
    
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
  ]
});

$('.previous').click(function(){
  $(this).addClass('bg_arrw');
  $('.next_btn').removeClass('bg_arrw');
})
$('.next_btn').click(function(){
  $(this).addClass('bg_arrw');
  $('.previous').removeClass('bg_arrw');
})

// professional trainer pagination
$('.previous-page').click(function(){
  $(this).addClass('bg_arrw');
  $('.next-page').removeClass('bg_arrw');
})
$('.next-page').click(function(){
  $(this).addClass('bg_arrw');
  $('.previous-page').removeClass('bg_arrw');
})