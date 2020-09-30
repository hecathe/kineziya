var buttons = document.querySelectorAll('.popup-link');
var popupForm = document.querySelector('.popup-form-wrap');
var popupClose = document.querySelector('.popup-close');
var page = document.documentElement;

for (let button of buttons) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        popupForm.classList.add('show');
        page.classList.add('scroll-hidden');
    });

    popupClose.addEventListener('click', function(event) {
        popupForm.classList.remove('show');
        page.classList.remove('scroll-hidden');
    });
}

/*document.addEventListener('mousedown', function(event) {
    if(event.target.closest('.popup-form-wrap') === null) {
        popupForm.style.display = 'none';
    }
});*/