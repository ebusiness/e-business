// element reference
var $wrapper = $('.wrapper');
var $loading = $('#loading');
var $window = $(window);
var $header = $(".header-fixed .header-sticky");

// init google map first cause it slow
var map = new GMaps({
  div: '#map',
  scrollwheel: false,
  lat: 35.6501828,
  lng: 139.7531093,
  zoom: 17
});

// start proloader
$wrapper.jpreLoader({
  loaderVPos: '50%',
  autoClose: true
}, function() {

  // setup page
  handleFastClick();
  handleHeader();
  handleMap();

  // display content
  TweenMax.to($wrapper, 0.7, {
    opacity: 1
  });

  // hide loader then start animation
  $loading.fadeOut('fast');

});

// Fast Click
var handleFastClick = function() {
  FastClick.attach(document.body);
};

// Fixed Header
var handleHeader = function() {

  $window.scroll(function() {
    if ($window.scrollTop() > 100) {
      $header.addClass("header-fixed-shrink");
    } else {
      $header.removeClass("header-fixed-shrink");
    }
  });
};

// GoogleMap add Marker
var handleMap = function() {

  // draw map mark
  var marker = map.addMarker({
    lat: 35.6501828,
    lng: 139.7531093,
    animation: google.maps.Animation.DROP,
    title: 'E-Business Inc.',
    infoWindow: {
      content: '東京都港区芝2-28-8芝2丁目ビル10階'
    }
  });

  // This opens the infoWindow
  marker.infoWindow.open(map, marker);
};