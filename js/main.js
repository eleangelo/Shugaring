let recordButton = document.querySelector('#record-button');
let modal = document.querySelector('.modal');
let buttonRequest = document.querySelector('.button-request');

recordButton.addEventListener('click', function (event) {
    modal.classList.add('is-open');

});

buttonRequest.addEventListener('click', function (event) {
    if (form_is_correct()) {
        modal.classList.remove('is-open');
    }
});

function form_is_correct() {
    return true
}