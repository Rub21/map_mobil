var map;

$(document).ready(function() {
    cargarCategorias();
});


var incidencias = {
    "features": [
        {
            "geometry": {
                "coordinates": [-77.071824, -11.868501],
                "type": "Point"
            },
            "properties": {
                "description": "Hacia el Sur",
                "id": "marker-hsrjq8d32n",
                "marker-color": "#b7ddf3",
                "marker-size": "",
                "marker-symbol": "town-hall",
                "name": "35+238 (Km 39)",
                "styleHash": "1e06d38e",
                "styleUrl": "#sn_arrow20",
                "title": "Daños a Puentes"
            },
            "type": "Feature"
        }, {
            "geometry": {
                "coordinates": [-77.060754, -12.010141],
                "type": "Point"
            },
            "properties": {
                "description": "Hacia el Norte",
                "id": "marker-hsrjq8d227",
                "marker-color": "f1f075",
                "marker-size": "",
                "marker-symbol": "fuel",
                "name": "36+236 (Km 40)",
                "styleHash": "-10e1b07",
                "styleUrl": "#sn_arrow9",
                "title": "Daños a Puentes"
            },
            "type": "Feature"
        }, {
            "geometry": {
                "coordinates": [-77.067821, -11.965467],
                "type": "Point"
            },
            "properties": {
                "description": "Hacia el Norte",
                "id": "marker-hsrjq8d22c",
                "marker-color": "f1f075",
                "marker-size": "",
                "marker-symbol": "fuel",
                "name": "34+203 (Km 38)",
                "styleHash": "2cef11ad",
                "styleUrl": "#sn_arrow30",
                "title": "Vehículo Averiado"
            },
            "type": "Feature"
        }, {
            "geometry": {
                "coordinates": [-77.071472, -11.938444],
                "type": "Point"
            },
            "properties": {
                "description": "Hacia el Sur",
                "id": "marker-hsrjq8d22f",
                "marker-color": "f1f075",
                "marker-size": "",
                "marker-symbol": "fuel",
                "name": "32+240 (Km 36)",
                "styleHash": "-6de12a71",
                "styleUrl": "#sn_arrow21",
                "title": "Derrame de Cargas "
            },
            "type": "Feature"
        }],
    "id": "armandoperu.hh42cm09",
    "type": "FeatureCollection"
};



function  cargarCategorias() {
    $.ajax({
        url: 'Data/Incidencias.geoJson',
        data: {},
        type: 'POST',
        dataType: 'json',
        success: function(response) {
            $.each(response.features, function(i, dat) {
                $('#listaIncidentes').append('<li> <a href="#details"  class="mostramapa" onclick="mostrarMapa(\'' + dat.properties.id + '\')" id="' + dat.properties.id + '" data-transition="slide">' + dat.properties.title + '</a></li>');
            });
            $('#listaIncidentes').listview("refresh");


        },
        error: function(jqXHR, status, error) {
            alert('Disculpe, existió un problema');
        },
        complete: function(jqXHR, status) {
            //alert('Petición realizada');
        }
    });

}


