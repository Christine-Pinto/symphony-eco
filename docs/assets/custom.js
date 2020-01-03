window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 100;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Service Overview Slider
$(document).ready(function() {

  var $slider = $(".slider__warpper"),
  curSlide = 1,
  numOfSlides = 5,
  autoSlideTimeout,
  autoSlideDelay = 3000;

function autoSlider() {
  autoSlideTimeout = setTimeout(function() {
    window.clearTimeout(autoSlideTimeout);
    var current = $('.flex--active').data('slide');
    curSlide=current;
    curSlide++;
    if (curSlide > numOfSlides) curSlide = 1;
    // get current slide
    
    // get button data-slide
    next = curSlide;
  
    $('.slide-nav').removeClass('active');
    $('.slider__navi').find('.slide-nav[data-slide=' + next + ']').addClass('active');
  

      $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 800);
      
  }, autoSlideDelay);
};

autoSlider();


$('.slide-nav').on('click', function(e) {
  e.preventDefault(e);
  window.clearTimeout(autoSlideTimeout);
    // get current slide
    var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
  autoSlider();
});

setInterval(function() {
  autoSlider();
}, autoSlideDelay)

;

});
