document.addEventListener('DOMContentLoaded', function(event){
    var list = document.querySelectorAll('.prices__title-wrap .prices__link');
    list = Array.prototype.slice.call(list, 0); // convert nodeList to Array
    list.forEach(function(el, i, ar) {
        el.addEventListener('click', function(event){
            event.preventDefault();
            var tab = document.querySelector(el.getAttribute('href'));

            // remove "act" class
            document.querySelector('.prices__title-wrap .active').classList.remove('active');
            document.querySelector('.prices__tabs-group .active').classList.remove('active');
            // set "act"
            el.classList.add('active');
            tab.classList.add('active');
        });
    });
});