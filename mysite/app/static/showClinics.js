// We can use this script to generate locations.

// We can hardcode

const defaultLat = 49.2827;
const defaultLon = -123.1207;
const defaultZoom = 14;

//const locations = [
//    "Mood Disorders Association of BC",
//    "Canadian Mental Health Association, BC Division"
//];

function myMap(json_in) {
//    console.log("aylmao");
//    var locations_json = JSON.parse(json_in);
//    console.log("lmao");

//    locations = {};
//    fields = {};
//
//    for (var i = 0, location; i < locations_json.length; i++) {
//        for (var j = 0; field; j < locations_json.i.length; j++) {
//            field = locations_json.i[j];
//            fields[] = field;
//        }
//        location = locations_json[i];
//        locations[]
//    }

//    locations = [];
//
//    for (var i = 0; location; i < locations_json.length; i++) {
//        locations.push(locations_json[i]['name'])
//    }

    var mapProp = {
        zoom: defaultZoom,
        center:new google.maps.LatLng(defaultLat, defaultLon)
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position: {lat: defaultLat, lng: defaultLon},
        map: map,
        title: 'Hello Vancouver!'
    });

    var geocoder = new google.maps.Geocoder();

    var geocode = function(loc) {
        geocoder.geocode( {address: loc}, function(results, status) {
          if (status == 'OK') {
            // map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
    }

    locations.forEach(function(loc) {
        geocode(loc);
    })

}


