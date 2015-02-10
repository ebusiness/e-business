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
  },

  shim: {
    'bootstrap': ['jquery'],
    'fastclick': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery']
  }

});

require([
  'fastclick',
  'jpreloader',
  'back2top',
  'bootstrap',
  'tween-max',
  'waypoints'
], function(fastclick) {

  // element reference
  var $wrapper = $('.wrapper');
  var $loading = $('#loading');
  var $window = $(window);
  var $header = $(".header-fixed .header-sticky");

  var $recruitInfoArea = $('#recruit-info');
  var $recruitInfo = $('.service');

  // start proloader
  $wrapper.jpreLoader({
    loaderVPos: '50%',
    autoClose: true
  }, function() {

    // setup page
    handleFastClick();
    handleHeader();
    handleModal();
    handleAnimation();

    // display content
    TweenMax.to($wrapper, 0.7, {
      opacity: 1
    });

    // hide loader then start animation
    $loading.fadeOut('fast', startAnimation);
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

  // Resume Template Download
  var handleModal = function() {
    $('#btn-download-resume').click(function() {
      window.location.href = "/resume-template";
      $('#privacy-modal').modal('hide');
    })
  };

  // Animation initialize
  var handleAnimation = function() {

    // init tween
    TweenMax.set($recruitInfoArea, {
      perspective: 800
    });

    TweenMax.set($recruitInfo, {
      transformPerspective: 800,
      rotationX: 90,
      autoAlpha: 0
    });
  };

  // Animation
  var startAnimation = function() {

    // setup waypoints
    $recruitInfoArea.waypoint(function() {
      TweenMax.staggerTo($recruitInfo, 0.5, {
        rotationX: 0,
        autoAlpha: 1
      }, 0.3);
    }, {
      offset: '100%',
      triggerOnce: true
    });

  };

});