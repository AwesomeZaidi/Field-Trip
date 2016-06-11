var map;
function initMap() {
<<<<<<< HEAD
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.892941, lng: -87.624923},
    zoom: 18
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
 
  var myLatLng = {lat: 41.892941, lng: -87.624923};

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
=======
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.5, lng: -98.35},
    zoom: 8
  });
>>>>>>> e6114687f2e24d4a488313415a9774fe605152bf

}
var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var infoWindow = new google.maps.InfoWindow({map: map});

<<<<<<< HEAD
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Your Location' :
                        'Your Location');
}
=======
var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
}
>>>>>>> e6114687f2e24d4a488313415a9774fe605152bf
