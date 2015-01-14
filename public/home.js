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
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'rs-slider': ['touchswipe', 'tween-max'],
    'owl-carousel': ['bootstrap'],
    'app-slider': ['rs-slider'],
    'app-carousel': ['owl-carousel'],
    'jpreloader': ['jquery'],
    'app': ['back2top', 'app-slider', 'app-carousel', 'waypoints', 'jpreloader'],
  }

});

require(['touchswipe', 'tween-max', 'app'], function(app) {

  $('.wrapper').jpreLoader({
      loaderVPos: '50%',
      autoClose: true
    },
    function() {
      TweenMax.to($('.wrapper'), 0.7, {
        opacity: 1
      });
      $('#loading').fadeOut('fast');
    });

  // global init
  App.init();

  // init slider
  RevolutionSlider.initRSfullWidth();
  OwlCarousel.initOwlCarousel();

  // element reference
  $thumbnails = $('.thumbnails');

  // init tween
  TweenMax.set($thumbnails, {
    transformPerspective: 300,
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