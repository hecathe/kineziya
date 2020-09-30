ymaps.ready(init);
    var myMap = document.getElementById('map');

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [59.9648238, 30.3240951],
            behaviors: ['default', 'scrollZoom'],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        }),

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
    }