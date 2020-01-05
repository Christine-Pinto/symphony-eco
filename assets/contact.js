$(function () {
  
/*     window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    } */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
      
        if (!e.isDefaultPrevented()) {
          console.log($(this).serialize());
            // var url = "contact.php";

            // $.ajax({
            //     type: "POST",
            //     url: url,
            //     data: $(this).serialize(),
            //     success: function (data) {
            //         var messageAlert = 'alert-' + data.type;
            //         var messageText = data.message;

            //         var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            //         if (messageAlert && messageText) {
            //             $('#contact-form').find('.messages').html(alertBox);
            //             $('#contact-form')[0].reset();
            //             grecaptcha.reset();
            //         }
            //     }
            // });
            return false;
        }
    })
});

const FloatLabel = (() => {
  
    // add active class and placeholder 
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
    
    // remove active class and placeholder
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');    
    };  
    
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);    
    };
    
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
            element.classList.add('active');
        }      
        
        bindEvents(element);
      });
    };
    
    return {
      init: init
    };
  })();
  
  FloatLabel.init();
  

  $(document).ready(function() {
    //website BUDGET SLIDER
    var websiteBudgetSlider = document.getElementById('website-slider-budget'),
    websiteBudgetSliderInput = document.getElementById('website-slider-budget-input');
    
    noUiSlider.create(websiteBudgetSlider, {
    start: [5],
    connect: true,
    range: {
      'min': [5],
      'max': [85]
    },
    step: 10,
    format: wNumb({
    decimals: 0,
      prefix: '$',
    suffix: 'k',
    })
    });
    
    websiteBudgetSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
    var secondValue = parseInt(unencoded) + parseInt(10);
    websiteBudgetSliderInput.value = values + ' - ' + secondValue + 'k';
    });
    
    //website WEEKS SLIDER
    var websiteWeekSlider = document.getElementById('website-slider-week');
    var websiteWeekInput = document.getElementById('website-slider-week-input');
    
    
    noUiSlider.create(websiteWeekSlider, {
      start: [4],
      connect: true,
      range: {
          'min': 4,
          'max': 50
      },
      step: 1,
      format: wNumb({
      decimals: 0,
      suffix: ' weeks',
    })
    });
    
    websiteWeekSlider.noUiSlider.on('update', function( values, handle ) {
      var value = values[handle];
    
      if ( handle ) {
        websiteWeekInput.value = value;
      }else{
        websiteWeekInput.value = value;
      }
    });
    
    websiteWeekInput.addEventListener('change', function(){
      websiteWeekSlider.noUiSlider.set([null, this.value]);
    });
    });
    
      // FORM PAGER HIGLIGHTING ITEM
      $(document).on("scroll", onScroll);
      //smoothscroll
      $('.form-pager a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
    
          $('a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
    
          var target = this.hash,
              menu = target;
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top+2
          }, 600, 'easeInOutQuart', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
    
      function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.form-pager a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.form-pager-1 ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
      }
    
      // toggle select input list 
      $('.js-form-link').click(function () {
        $('.js-form-link').removeClass("selected");
        $(this).addClass("selected");
      });
      $('.js-show-section').click(function () {
        $('.js-show-section').removeClass("selected");
        $(this).addClass("selected");
      });
    
      //SCROLL TO ANCHOR
      $(".js-form-link").on('click', function (event) {
        event.preventDefault();
        var $anchorValue = $(this).data("anchor");
    
        setTimeout(function(){
            $('html, body').animate({
              scrollTop: $('div#'+$anchorValue+'').offset().top
            }, 600, "easeInOutQuart");
            return false;
        }, 500);
    });
    
      //SHOW PROPER FORM (SECTION)
      $('.js-show-section').click(function(){
        var sectionName = $(this).data('form');
    
        $('section.main-type').fadeOut();
          
        $('section#'+sectionName+'').find('.js-form-link-main-data').val(sectionName);
        $('section#'+sectionName+'').fadeIn(function(){
          $('html, body').animate({
            scrollTop: $('section#'+sectionName+'').offset().top
          }, 600, "easeInOutQuart");
        });
      });
    
    ////// CUSTOM EASINGS 
    $.easing.jswing = $.easing.swing;
     
    $.extend($.easing, {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert($.easing.default);
            return $.easing[$.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });