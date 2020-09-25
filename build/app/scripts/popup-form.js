var buttons = document.querySelectorAll('.popup-link');
var popupForm = document.querySelector('.popup-form-wrap');
var popupClose = document.querySelector('.popup-close');

for (let button of buttons) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        popupForm.classList.add('show');
    });

    popupClose.addEventListener('click', function(event) {
        popupForm.classList.remove('show');
    });
}