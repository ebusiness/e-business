requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': '/components/jquery/dist/jquery',
    'bootstrap': '/components/bootstrap/dist/js/bootstrap',
    'back2top': '/js/back-to-top',
    'tween-max': '/components/gsap/src/minified/TweenMax.min',
    'waypoints': '/components/waypoints/waypoints.min',
    'jpreloader': '/components/jpreloader/js/jpreloader.min',
    'async': '/components/requirejs-plugins/src/async',
    'gmap': '/components/gmaps/gmaps',
    'sky-form': '/components/sky-forms/version-2.0.1/js/jquery.form.min',
    'validate': '/components/sky-forms/version-2.0.1/js/jquery.validate.min',
    'app': '/js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery'],
    'gmap': ['async!http://maps.google.com/maps/api/js?sensor=true'],
    'app': ['bootstrap', 'back2top', 'tween-max', 'waypoints', 'jpreloader'],
  }

});

require(['gmap', 'app'], function(app) {

  // global init
  App.init();

  // init google map
  var map = new GMaps({
    div: '#map',
    scrollwheel: false,
    lat: 35.6501828,
    lng: 139.7531093,
    zoom: 17
  });

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

  // element reference
  $input = $('section').add('button')

  // init tween
  TweenMax.set($input, {
    transformPerspective: 500,
    rotationX: 90,
    alpha: 0
  });

  // setup waypoints
  $('#sky-form3').waypoint(function() {
    TweenMax.staggerTo($input, 0.2, {
      rotationX: 0,
      alpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });

});