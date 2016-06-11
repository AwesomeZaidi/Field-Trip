var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.5, lng: -98.35},
    zoom: 8
  });
<<<<<<< HEAD
}
<<<<<<< HEAD
var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
=======
=======
}
>>>>>>> 9ae8a711e6e3150f4b8010ea1d263cfe1ece5256
>>>>>>> 93d41ca8e0d272985fa9f3fceeb3915a0f2c68ab
