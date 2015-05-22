requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'fastclick': 'components/fastclick/lib/fastclick',
    'back2top': 'components/back-to-top/index',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'waypoints': 'components/waypoints/waypoints.min',
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
    'async': 'components/requirejs-plugins/src/async',
    'gmap': 'components/gmaps/gmaps',
    'angular': 'components/angular/angular.min',
    'selink': 'js/selink/selink',
    'selink-service': 'js/selink/service/inquiry',
  },

  shim: {
    'bootstrap': ['jquery'],
    'fastclick': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery'],
    'gmap': ['async!http://maps.google.com/maps/api/js?sensor=true'],
    'selink': ['angular'],
    'selink-service': ['selink'],
  }

});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
  'fastclick',
  'jpreloader',
  'back2top',
  'bootstrap',
  'tween-max',
  'waypoints',
  'gmap',
  'selink-service'
], function(fastclick) {

  // element reference
  var $wrapper = $('.wrapper');
  var $loading = $('#loading');
  var $window = $(window);
  var $header = $(".header-fixed .header-sticky");

  var tl = new TimelineMax();

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
    fastclick.attach(document.body);
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


});