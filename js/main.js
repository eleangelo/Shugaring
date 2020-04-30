 const     recordButton = document.querySelector('#record-button'),
         modal = document.querySelector('.modal'),
         buttonRequest = document.querySelector('.button-request');

  const  requestUserName = document.querySelector('.request-user-name'),
         requestTel = document.querySelector('.request-tel'),
         requestText = document.querySelector('.request-text');

recordButton.addEventListener('click', function (event) {
    modal.classList.add('is-open');

});

buttonRequest.addEventListener('click', function (event) {
    if (form_is_correct()) {
        modal.classList.remove('is-open')
    }
});

const  requestUserNameValue = requestUserName.value,
    requestTelValue = requestTel.value,
    requestTextValue = requestText.value;


function form_is_correct() {
    return (requestUserNameValue !== '' && requestTelValue !=='' && requestTextValue !== '')
}