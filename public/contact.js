requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'fastclick': 'components/fastclick/lib/fastclick',
    'back2top': 'js/back-to-top',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'waypoints': 'components/waypoints/waypoints.min',
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
    'async': 'components/requirejs-plugins/src/async',
    'gmap': 'components/gmaps/gmaps'
  },

  shim: {
    'bootstrap': ['jquery'],
    'fastclick': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery'],
    'gmap': ['async!http://maps.google.com/maps/api/js?sensor=true']
  }

});

require([
  'fastclick',
  'jpreloader',
  'back2top',
  'bootstrap',
  'tween-max',
  'waypoints',
  'gmap'
], function(fastclick) {

  // init google map first cause it slow
  var map = new GMaps({
    div: '#map',
    scrollwheel: false,
    lat: 35.6501828,
    lng: 139.7531093,
    zoom: 17
  });

  // start proloader
  $('.wrapper').jpreLoader({
    loaderVPos: '50%',
    autoClose: true
  }, function() {

    // setup page
    handleFastClick();
    handleHeader();
    handleMap();
    handleAnimation();

    // display content
    TweenMax.to($('.wrapper'), 0.7, {
      opacity: 1
    });

    // hide loader then start animation
    $('#loading').fadeOut('fast', startAnimation);

  });

  // Fast Click
  var handleFastClick = function() {
    fastclick.attach(document.body);
  };

  // Fixed Header
  var handleHeader = function() {

    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $(".header-fixed .header-sticky").addClass("header-fixed-shrink");
      } else {
        $(".header-fixed .header-sticky").removeClass("header-fixed-shrink");
      }
    });
  };

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

  // Animation initialize
  var handleAnimation = function() {

    // element reference
    $input = $('section').add('button')

    // init tween
    TweenMax.set($('form'), {
      transformPerspective: 800
    });

    TweenMax.set($input, {
      transformPerspective: 800,
      rotationX: 90,
      alpha: 0
    });

  };

  // Animation
  var startAnimation = function() {

    // element reference
    $input = $('section').add('button')

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
  };

});