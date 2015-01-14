requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'touchswipe': 'components/jquery-touchswipe/jquery.touchSwipe.min',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'rs-slider': 'components/revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min',
    'owl-carousel': 'components/OwlCarousel/owl-carousel/owl.carousel',
    'app-slider': 'js/plugins/revolution-slider',
    'app-carousel': 'js/plugins/owl-carousel',
    'waypoints': 'components/waypoints/waypoints.min',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'rs-slider': ['touchswipe', 'tween-max'],
    'owl-carousel': ['bootstrap'],
    'app-slider': ['rs-slider'],
    'app-carousel': ['owl-carousel'],
    'app': ['back2top', 'app-slider', 'app-carousel', 'waypoints'],
  }

});

require(['touchswipe', 'tween-max', 'app'], function(app) {

  // global init
  App.init();

  // init slider
  RevolutionSlider.initRSfullWidth();
  OwlCarousel.initOwlCarousel();

  // element reference
  $thumbnails = $('.thumbnails');

  // init tween
  TweenMax.set($thumbnails, {
    transformPerspective: 500,
    rotationY: 90,
    alpha: 0
  });

  // setup waypoints
  $('#sub-cate').waypoint(function() {
    TweenMax.staggerTo($thumbnails, 1, {
      rotationY: 0,
      alpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });

});