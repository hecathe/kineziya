var toggle = document.querySelector('.header__toggle');
var headerNav = document.querySelector('.header__nav');
var headerPage = document.querySelector('.header');

toggle.addEventListener('click', function(event) {
    toggle.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerPage.classList.toggle('active');
});