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
  