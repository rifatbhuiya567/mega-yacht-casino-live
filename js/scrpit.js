$(window).scroll(function(){
    let scrolling = $(this).scrollTop();
    if( scrolling > 100){
      $(".backtotop i").fadeIn(500);
    }
    else{
      $(".backtotop i").fadeOut(500);
    }

    if( scrolling > 40){
      $(".mainNavbar").addClass("nav-anim");
    }
    else{
      $(".mainNavbar").removeClass("nav-anim");
    }
});
// Scroll function end

$(".backtotop i").click(function(){
    $("html, body").animate({
        scrollTop:0
    },500)
});
// BacktoTop End

var bannerSlide = $('.slide-banner');

bannerSlide.slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
});
// BannerArea Slide End


var testimonialSlide = $('.testimonal-slide');

testimonialSlide.slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
// TestimonialArea Slide End

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
});
// Tooltip End