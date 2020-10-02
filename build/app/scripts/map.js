ymaps.ready(init);
    var myMap = document.getElementById('map');

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [59.9648238, 30.3240951],
            //behaviors: ['default', 'scrollZoom'],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        }),

        myMap.behaviors
            .disable('multitouch')
            .disable('scrollZoom');

        myPlacemark = new ymaps.Placemark([59.964823, 30.326270], {
            balloonContentHeader: "«Кинезия»",
            balloonContentBody: "Центр движения",
            balloonContentFooter: "г. Санкт-Петербург, ул. Рентгена, д. 19"
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'app/images/placemark2.png',
            iconImageSize: [80, 80],
            iconImageOffset: [-48, -70]
        });
        
        myMap.geoObjects.add(myPlacemark);

        var ctrlKey = false;
        var ctrlMessVisibility = false;
        var timer;

        function fadeIn(el) {
            var opacity = 0.01;
    
            document.querySelector(el).style.display = 'block';
    
            /*var timer = setTimeout(function() {
                if(opacity >= 1) {
                    clearInterval(timer);
                }
                //ctrlMessVisibility = false;
    
                document.querySelector(el).style.opacity = opacity;
                opacity += opacity*1;
            }, 100);*/
        };
    
        function fadeOut(el) {
            var opacity = 1;
    
            document.querySelector(el).style.display = 'none';
            /*var timer = setTimeout(function() {
                if(opacity <= 0.1) {
                    document.querySelector(el).style.display = 'none';
                    clearInterval(timer);
                }
    
                document.querySelector(el).style.opacity = opacity;
                opacity -= opacity*1;
            }, 100);*/
        };

        function offScroll() {
            document.body.style.overflow = 'hidden';

            myMap.onmouseout = function() {
                document.body.style.overflow = 'scroll';
            }
        };
        
        myMap.events.add(['wheel', 'mousedown', 'click'], function(e) {

            if (screen.width <= 768) {
                myMap.events.once('click', function() {
                    var fade = document.querySelector('.contacts__map-ctrl');
            
                    fade.classList.add('hide');
            
                    myMap.behaviors
                        .enable(['scrollzoom'])
                        .enable(['multitouch']);
                });
            } else {
                if(e.get('type') == 'wheel') {
                    if(!ctrlKey) {
                        fadeIn('.contacts__map-ctrl');
                        ctrlMessVisibility = true;
                        clearTimeout(timer);
    
                        timer = setTimeout(function() {
                            fadeOut('.contacts__map-ctrl');
                            ctrlMessVisibility = false;
                        }, 1500);
                    } else {
                        fadeOut('.contacts__map-ctrl');
                    }
                }
    
                if(e.get('type') == 'mousedown' && ctrlMessVisibility) {
                    fadeOut('.contacts__map-ctrl');
                }
            }
        });

        var body = document.getElementsByTagName('body')[0];
        body.onkeydown = callbackDown;
        body.onkeyup = callbackUp;

        function callbackDown(e){
            if(e.keyCode === 17){
                ctrlKey = true;
                myMap.behaviors.enable(['scrollZoom']);
            }
        };

        function callbackUp(e){
            if(e.keyCode === 17){
                ctrlKey = false;
                myMap.behaviors.disable(['scrollZoom']);
            }
        };

        /*myMap.events.once('click', function() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                var fade = document.querySelector('.contacts__map-ctrl');
            
                    fade.classList.add('hide');
            
                    myMap.behaviors
                        .enable(['scrollzoom'])
                        .enable(['multitouch']);
            } else {
                myMap.behaviors
                        .disable(['scrollzoom'])
                        .disable(['multitouch']);
            }
        });*/
        
        /*function (event) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                myMap.events.once('click', function() {
                    var fade = document.querySelector('.contacts__map-ctrl');
            
                    fade.classList.add('hide');
            
                    myMap.behaviors
                        .enable(['scrollzoom'])
                        .enable(['multitouch']);
                });
            } else {
                    myMap.behaviors
                        .disable(['scrollzoom'])
                        .disable(['multitouch']);
            }
        };*/

        /*document.addEventListener('keydown', function(event) {
            if(e.keyCode === 17 && !ctrlKey) {
                ctrlKey = true;
                myMap.behaviors.enable('scrollZoom');
            }
        }),

        document.addEventListener('keyup', function(event) {
            if(e.keyCode === 17) {
                myMap.behaviors.disable('scrollZoom');
            }
        });*/

        
    }