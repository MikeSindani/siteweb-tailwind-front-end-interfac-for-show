

function GetMap(L,l) {
    var map = new Microsoft.Maps.Map('#map', {
        
        center: new Microsoft.Maps.Location(L,l),
        zoom: 19,
        credentials: 'AgqxbyOj48ZmO52UrrOkGyImBfPE_VWjJcsO0vfclUBA7O13Hi85Sd7njYrFEzty',
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,

    });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    var layer = new Microsoft.Maps.Layer();
    layer.add(pushpin);
    map.layers.insert(layer);
 }

 window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1.5,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 1400,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    });
});