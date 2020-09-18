document.addEventListener('DOMContentLoaded', function(event){
    var list = document.querySelectorAll('.prices-list__item-wrap .prices-list__select');
    list = Array.prototype.slice.call(list, 0); // convert nodeList to Array
    list.forEach(function(el, i, ar) {
        el.addEventListener('click', function(event){
            event.preventDefault();
            var tab = document.querySelector(el.getAttribute('href'));
            //var ticks = document.querySelectorAll('.prices-list__svg');

            // remove "act" class
           /* document.querySelector('.prices-list__item-wrap .active').classList.toggle('active');
            document.querySelector('.inserted-list .active').classList.toggle('active');*/
            // set "act"
            el.classList.toggle('active');
            tab.classList.toggle('active');

            /*for (let tick of ticks) {
                tick.classList.remove('active')
                tick.classList.add('active');
            }*/
        })
    })
})