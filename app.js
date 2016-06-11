function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.892941, lng: -87.624923},
    zoom: 18
  });

  var uluru = {lat: -25.363, lng: 131.044};

  var infoWindow = new google.maps.InfoWindow({map: map});
   
  var myLatLng = {lat: 41.892941, lng: -87.624923};
  var myLatLng_1 = {lat: 41.892941, lng: -87.624923};
  var myLatLng_2 = {lat: 41.892941, lng: -87.624923};
  var myLatLng_3 = {lat: 41.892941, lng: -87.624923};
  var myLatLng_4 = {lat: 41.892941, lng: -87.624923};
  var myLatLng_5 = {lat: 41.892941, lng: -87.624923};
  var myLatLng_6 = {lat: 41.892941, lng: -87.624923};

  var marker_hackathon = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
   
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">AT&T Mobile App Hackathon (Smart City) - Bay Area</h1>'+
      '<div id="bodyContent">'+
      '<p>Join us for a special Smart City Mobile App Hackathon, produced by the AT&T Developer  ' +
      'Program. Hangout with us as we hack and build apps/mobile apps, get fed, compete for prizes  '+
      'across different categories and most importantly: meet new people and scout for teammates to  '+
      'work on new or current projects. We will have experts from AT&T and the local community  '+
      'onsite to assist with your development. Check out the event '+
      '<a href="http://www.eventbrite.com/e/att-mobile-app-hackathon-smart-city-bay-area-tickets-5606447034">'+
      'here</a>' +
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker_hackathon.addListener('click', function() {
    infowindow.open(map, marker_hackathon);
  });
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Your Location' :
                        'Your Location');
}