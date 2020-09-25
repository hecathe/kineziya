var toggle = document.querySelector('.header__toggle');
var headerNav = document.querySelector('.header__nav');
var headerPage = document.querySelector('.header');
var page = document.documentElement;

function toggleMenu(event) {
    toggle.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerPage.classList.toggle('active');
    page.classList.toggle('scroll-hidden');
};

toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == headerNav || headerNav.contains(target);
    const its_toggle = target == toggle;
    const headerNav_is_active = headerNav.classList.contains('active');
    
    if (!its_menu && !its_toggle && headerNav_is_active) {
        toggleMenu();
    }
});