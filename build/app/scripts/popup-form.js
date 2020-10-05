var buttons = document.querySelectorAll('.popup-link');
var popupForm = document.querySelector('.popup-form-wrap');
var popupClose = document.querySelector('.popup-close');
var page = document.documentElement;
var overlay = document.querySelector('.popup-fade');

for (let button of buttons) {
    button.addEventListener('click', function(event) {
        popupForm.classList.add('show');
        page.classList.add('scroll-hidden');
    });

    popupClose.addEventListener('click', function(event) {
        popupForm.classList.remove('show');
        page.classList.remove('scroll-hidden');
    });

    overlay.addEventListener('click', function(event) {
        popupForm.classList.remove('show');
        page.classList.remove('scroll-hidden');
    });
}

/*document.addEventListener('mousedown', function(event) {
    if(event.target.closest('.popup-form-wrap') === null) {
        popupForm.style.display = 'none';
    }
});*/