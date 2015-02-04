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
    'touchswipe': 'components/jquery-touchswipe/jquery.touchSwipe.min',
    'rs-slider': 'components/revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min',
  },

  shim: {
    'bootstrap': ['jquery'],
    'fastclick': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery'],
    'rs-slider': ['touchswipe', 'tween-max']
  }

});

require([
  'fastclick',
  'jpreloader',
  'back2top',
  'bootstrap',
  'touchswipe',
  'rs-slider',
  'waypoints'
], function(fastclick) {

  // start proloader
  $('.wrapper').jpreLoader({
    loaderVPos: '50%',
    autoClose: true
  }, function() {

    // setup page
    handleFastClick();
    handleHeader();
    handleSlider();
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

  // Slider
  var handleSlider = function() {

    $('.tp-banner').revolution({
      delay: 9000,
      startwidth: 870,
      startheight: 400,
      hideThumbs: 10,
      navigationStyle: "preview4"
    });
  };

  // Animation initialize
  var handleAnimation = function() {

    // element reference
    $thumbnails = $('.thumbnails');

    // init tween
    TweenMax.set($('#sub-cate'), {
      transformPerspective: 800,
    });

    // init tween
    TweenMax.set($thumbnails, {
      transformPerspective: 800,
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      rotationY: 90,
      autoAlpha: 0
    });
  };

  // Animation
  var startAnimation = function() {

    // element reference
    $thumbnails = $('.thumbnails');

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
  };

});