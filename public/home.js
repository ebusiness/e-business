requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'waypoints': 'components/waypoints/waypoints.min',
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
    'touchswipe': 'components/jquery-touchswipe/jquery.touchSwipe.min',
    'rs-slider': 'components/revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min',
    'owl-carousel': 'components/OwlCarousel/owl-carousel/owl.carousel',
    'app-slider': 'js/plugins/revolution-slider',
    'app-carousel': 'js/plugins/owl-carousel',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery'],
    'rs-slider': ['touchswipe', 'tween-max'],
    'owl-carousel': ['bootstrap'],
    'app-slider': ['rs-slider'],
    'app-carousel': ['owl-carousel'],
    'app': ['bootstrap', 'back2top', 'tween-max', 'waypoints', 'jpreloader'],
  }

});

require(['touchswipe', 'app-slider', 'app-carousel', 'waypoints', 'app'], function(app) {

  // global init
  App.init();

  // init slider
  RevolutionSlider.initRSfullWidth();
  OwlCarousel.initOwlCarousel();

  // element reference
  $thumbnails = $('.thumbnails');

  // init tween
  TweenMax.set($thumbnails, {
    transformPerspective: 200,
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    rotationY: 90,
    autoAlpha: 0
  });

  // setup waypoints
  $('#sub-cate').waypoint(function() {
    TweenMax.staggerTo($thumbnails, 1, {
      rotationY: 0,
      autoAlpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });

});