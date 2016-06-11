function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.892941, lng: -87.624923},
    zoom: 18
  });

  var infoWindow = new google.maps.InfoWindow({map: map});
  var infoWindow2 = new google.maps.InfoWindow({map: map});
  var infoWindow3 = new google.maps.InfoWindow({map: map});
  var infoWindow4 = new google.maps.InfoWindow({map: map});

  var myLatLng_0 = {lat: 41.892941, lng: -87.624923};
  var myLatLng_1 = {lat: 41.8745666, lng: -87.6830331};
  var myLatLng_2 = {lat: 41.8885, lng: -87.6355};
  var myLatLng_3 = {lat: 41.8885, lng: -87.6355};

  var marker1 = new google.maps.Marker({
    map: map,
    position: myLatLng_0,
    title: 'AT&T Smart City Hackathon @ AT&T Store (Chicago)'
  });

  var marker2 = new google.maps.Marker({
    map: map,
    position: myLatLng_1,
    title: 'Summer 2016 Startup Series - Intellectual Property Basics'
  });

  var marker3 = new google.maps.Marker({
    map: map,
    position: myLatLng_2,
    title: 'Protohack'
  });

  var marker4 = new google.maps.Marker({
    map: map,
    position: myLatLng_3,
    title: 'JavaScript Bootcamp Admissions Event'
  });
   
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">AT&T Smart City Hackathon @ AT&T Store (Chicago)</h1>'+
      '<div id="bodyContent">'+
      '<p> Friday, June 10, 2016 at 6:00 PM - Saturday, June 11, 2016 at 9:00 PM (CDT) Chicago, IL' +
      'Join us for a special Smart City Mobile App Hackathon, produced by the AT&T Developer  ' +
      'Program. Hangout with us as we hack and build apps/mobile apps, get fed, compete for prizes  '+
      'across different categories and most importantly: meet new people and scout for teammates to  '+
      'work on new or current projects. We will have experts from AT&T and the local community  '+
      'onsite to assist with your development. Check out the event '+
      '<a href="http://www.eventbrite.com/e/att-mobile-app-hackathon-smart-city-bay-area-tickets-5606447034">'+
      'here</a>' +
      '</div>'+
      '</div>';
  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Summer 2016 Startup Series - Intellectual Property Basics</h1>'+
      '<div id="bodyContent">'+
      '<p> Monday, June 13th, 4pm to 6pm ' +
      'An overview of intellectual property, including patents, copyright, trademark, and additional intellectual ' +
      'assets. Designed to answer questions about how patents are applied for, issued, and managed. '+
      'Check out the event '+
      '<a href="http://chicagotechevents.com/event.php?id=06132016summerstartupseriesintellectualpropertybasics">'+
      'here</a>' +
      '</div>'+
      '</div>';
  var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Protohack</h1>'+
      '<div id="bodyContent">'+
      '<p> Saturday, June 11th, 9:30am to 10pm ' +
      'ProtoHack exists to show non-coders that they can create something amazing from nothing. We ' +
      'empower and enable the non-technical community with the tools, knowledge and connections that will '+
      'help bring their idea to life and visually communicate it through prototyping. Check out the event '+
      '<a href="http://chicagotechevents.com/event.php?id=06112016protohack">'+
      'here</a>' +
      '</div>'+
      '</div>';
  var contentString4 =  '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">JavaScript Bootcamp Admissions Event</h1>'+
      '<div id="bodyContent">'+
      '<p> Saturday, June 11th, 11am to 4pm' +
      'Fullstack Academy is offering a free "Bootcamp Prep" admissions workshop on Saturday June 11 at 11 ' +
      'AM. Attendees of this event will pair program through coding challenges similar to the ones seen on '+
      'Fullstack Academy admissions coding assessment.'+
      'Check out the event '+
      '<a href="http://chicagotechevents.com/event.php?id=06112016javascriptbootcampadmissionsevent">'+
      'here</a>' +
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });

  marker1.addListener('click', function() {
    infowindow.open(map, marker1);
  });

   marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });

    marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });

     marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
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