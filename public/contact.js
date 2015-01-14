requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'async': 'components/requirejs-plugins/src/async',
    'gmap': 'components/gmaps/gmaps',
    'sky-form': 'components/sky-forms/version-2.0.1/js/jquery.form.min',
    'validate': 'components/sky-forms/version-2.0.1/js/jquery.validate.min',
    'waypoints': 'components/waypoints/waypoints.min',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'gmap': ['async!http://maps.google.com/maps/api/js?sensor=true'],
    'app': ['bootstrap', 'back2top', 'gmap', 'waypoints', 'tween-max'],
  }

});

require(['app'], function(app) {

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
    title: 'E-Business Inc.'
  });

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