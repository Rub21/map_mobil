$('.details-page').live("pageshow", function() {
    var f = new Date();
    map = L.mapbox.map('map').setView([-12.047816, -77.062203],
        14);
    L.mapbox.tileLayer('armandoperu.hh42cm09', {
        attribution: 'Powered by <a target="_blank" href="http://geosolution.pe/">Geosolution ' + f.getFullYear() + '</a>'
    }).addTo(map);

    $.getJSON('https://dl.dropboxusercontent.com/u/43116811/ruben/files_geosolu/Norte.geojson', {
        format: "json"
    }).done(function(data) {
        console.log(data);
        map.markerLayer.setGeoJSON(data);

    });



});



function popup() {
    alert('hola');
    $('element_to_pop_up').bPopup({
        easing: 'easeOutBack', //uses jQuery easing plugin
        speed: 450,
        transition: 'slideDown'
    });
    alert('chau');
}

function onNorte() {
    var position = L.latLng(-11.781168, -77.15816);
    map.panTo(position);
}

function onSur() {
    var position = L.latLng(-12.02480, -77.05871);
    map.panTo(position);
}

function onEste() {
    var position = L.latLng(-12.057613, -76.971211);
    map.panTo(position);
}

function onRefresh() {

    $.ajax({
        type: "GET",
        url: "http://geosolution.pe/demo/GS_RutasLima/?method=gstrafico&file=44",
        async: true,
        success: function(datos) {
            conta = conta + 1;
            var dataJson = eval(datos);
            var trafico;

            for (var i in dataJson) {

                trafico = parseInt(dataJson[i].gs_codTrafico);
                var puntos = [
                    [parseFloat(dataJson[i].gs_CX), parseFloat(dataJson[i].gs_CY)],
                    [parseFloat(dataJson[i].gs_CX1), parseFloat(dataJson[i].gs_CY1)]
                ];
                if (trafico === 1) {
                    if (conta !== 1) {
                        map.removeLayer(lineas);
                    }
                    lineas = L.polyline(puntos, {
                        color: 'green',
                        opacity: 0.5
                    }).addTo(map);
                } else if (trafico === 2) {
                    if (conta !== 1) {
                        map.removeLayer(lineas);
                    }
                    lineas = L.polyline(puntos, {
                        color: 'yellow',
                        opacity: 0.5
                    }).addTo(map);
                } else {
                    if (conta !== 1) {
                        map.removeLayer(lineas);
                    }
                    lineas = L.polyline(puntos, {
                        color: 'red',
                        opacity: 0.5
                    }).addTo(map);
                }
            }
        },
        error: function(obj, error, objError) {
            //avisar que ocurrió un error
        }
    });
}