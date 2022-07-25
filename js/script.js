
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