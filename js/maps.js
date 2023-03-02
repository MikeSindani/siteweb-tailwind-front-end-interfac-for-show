

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