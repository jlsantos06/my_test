/** Home - Hero Slider **/
$(document).ready(function(){
    $('.uhd-homepage-hero-slider').slick({
        fade: true,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        lazyLoad: 'ondemand', 
        draggable: false,
        pauseOnFocus: true,
        pauseOnHover: true,
    });
  });