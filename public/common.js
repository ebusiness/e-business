requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'fastclick': 'components/fastclick/lib/fastclick',
    'back2top': 'js/back-to-top',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
  },

  shim: {
    'bootstrap': ['jquery'],
    'fastclick': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'jpreloader': ['jquery']
  }

});

require([
  'fastclick',
  'jpreloader',
  'back2top',
  'bootstrap',
  'tween-max'
], function(fastclick) {

  // start proloader
  $('.wrapper').jpreLoader({
    loaderVPos: '50%',
    autoClose: true
  }, function() {

    // setup page
    handleFastClick();
    handleHeader();

    // display content
    TweenMax.to($('.wrapper'), 0.7, {
      opacity: 1
    });

    // hide loader
    $('#loading').fadeOut('fast');

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

  $('#btn-download-resume').click(function() {
    window.location.href = "/resume-template";
    $('#privacy-modal').modal('hide');
  })
});