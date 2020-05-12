const recordButtons = document.querySelectorAll('.record-button'),
    modal = document.querySelector('.modal'),
    buttonRequest = document.querySelector('.button-request'),
    requestUserName = document.querySelector('.request-user-name'),
    requestTel = document.querySelector('.request-tel'),
    requestText = document.querySelector('.request-text');

for (recordButton of recordButtons) {
    recordButton.addEventListener('click', function (event) {
        
        requestUserNameValue = '';

        modal.classList.add('is-open');

        let title = event.target.parentNode.parentNode.querySelector('.service-subtitle').textContent;     
        modal.querySelector('.form-subtitle').textContent = title; 
    })
}

buttonRequest.addEventListener('click', function (event) {

   
    if (form_is_correct()) {
        modal.classList.remove('is-open')
    }
});

function form_is_correct() {
    return (requestUserNameValue !== '' && requestTelValue !== '' && requestTextValue !== '')
};


window.addEventListener("DOMContentLoaded", function() {
    let keyCode;

    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    let input = document.querySelector('.request-tel');
    input.addEventListener("input" , mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

});

function sliders() {
    new Swiper ('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    
    pagination: {
        el: '.swiper-pagination',
      },
    // breakpoints: {
    //     992: {
    //         slidesPerView: 3, 
    //     }
    // }
      })

};

sliders();