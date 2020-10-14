let slickIt = () => {
  $('.center-carousel').slick({
    centerMode: true,
    dots: false,
    centerPadding: '160px',
    slidesToShow: 1,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    speed:1200,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    cssEase: 'cubic-bezier(.13,.79,.23,.96)',
    // cssEase: 'easeInOutCirc',
    prevArrow:$('.prevArrow'),
    nextArrow:$('.nextArrow'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
  });
}

$(document).ready(function() {
  slickIt();
});