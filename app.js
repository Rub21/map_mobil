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

    if (!navigator.geolocation) {
        geolocate.innerHTML = 'geolocation is not available';
    } else {
        geolocate.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            map.locate();
        };
    }

    map.on('locationfound', function(e) {
        map.fitBounds(e.bounds);
        var geojson = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [e.latlng.lng, e.latlng.lat]
            },
            properties: {
                "title": "Aqui Estoy",
                'marker-color': '#3B5998',
                "marker-symbol": "pitch",
                "marker-size": "small",
            }
        };
        var markerLayer = L.mapbox.markerLayer(geojson).addTo(map);
        map.zoom(18);

    });



});


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

function mostrarMapa(dat) {
    console.log(dat);
    var marker;

    $.each(incidencias.features, function(k, v) {
        if (v.properties.id === dat) {
            marker = v;
        }
    });
    console.log(marker)
    var geojson = {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-77.5, -12.9]
        },
        properties: {
            "title": "Aqui Estoy",
            'marker-color': '#3B5998',
            "marker-symbol": "pitch",
            "marker-size": "small",
        }
    };
    L.mapbox.markerLayer(geojson).addTo(map);
}
;