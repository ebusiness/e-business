requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'fastclick': 'components/fastclick/lib/fastclick',
    'back2top': 'components/back-to-top/index',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
    'angular': 'components/angular/angular.min',
    'selink': 'js/selink/selink',
    'selink-service': 'js/selink/service/user',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'jpreloader': ['jquery'],
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
  'selink-service'
], function(fastclick) {

  // element reference
  var $wrapper = $('.wrapper');
  var $loading = $('#loading');
  var $window = $(window);
  var $header = $(".header-fixed .header-sticky");

  // start proloader
  $wrapper.jpreLoader({
    loaderVPos: '50%',
    autoClose: true
  }, function() {

    // setup page
    handleFastClick();
    handleHeader();
    handleApp();

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

  var handleApp = function() {

    angular.module('login', ['selink'])
      .controller('MainController', ['UserService', '$location', function(UserService, $location) {

        this.submit = function() {
          UserService.login(this.user).then(function(resp) {
            window.location.href = '/admin';
          }, function(resp) {
            $('.contex-bg').slideDown();
          });
        };

      }]);

    angular.resumeBootstrap(['login']);
  };

});