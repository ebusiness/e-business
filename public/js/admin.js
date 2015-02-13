requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'angular': 'components/angular/angular.min',
    'angular-route': 'components/angular-route/angular-route.min',
    'fastclick': 'components/fastclick/lib/fastclick',
    'back2top': 'components/back-to-top/index',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
    // File upload start
    'transport': 'components/jquery-file-upload/js/jquery.iframe-transport',
    'jquery.ui.widget': 'components/jquery-file-upload/js/vendor/jquery.ui.widget',
    'jquery.fileupload-image': 'components/jquery-file-upload/js/jquery.fileupload-image',
    'jquery.fileupload-audio': 'components/jquery-file-upload/js/jquery.fileupload-audio',
    'jquery.fileupload-video': 'components/jquery-file-upload/js/jquery.fileupload-video',
    'jquery.fileupload-validate': 'components/jquery-file-upload/js/jquery.fileupload-validate',
    'jquery.fileupload-process': 'components/jquery-file-upload/js/jquery.fileupload-process',
    'load-image': 'components/blueimp-load-image/js/load-image',
    'load-image-meta': 'components/blueimp-load-image/js/load-image-meta',
    'load-image-exif': 'components/blueimp-load-image/js/load-image-exif',
    'load-image-ios': 'components/blueimp-load-image/js/load-image-ios',
    'canvas-to-blob': 'components/blueimp-canvas-to-blob/js/canvas-to-blob',
    'jquery.fileupload': 'components/jquery-file-upload/js/jquery.fileupload',
    'angular-upload': 'components/jquery-file-upload/js/jquery.fileupload-angular',
    // File upload end
    'cubeportfolio': 'components/cube-portfolio/cubeportfolio/js/jquery.cubeportfolio',
    'selink': 'js/selink/selink',
    'selink-user-service': 'js/selink/service/user',
    'selink-inquiry-service': 'js/selink/service/inquiry',
    'selink-user-controller': 'js/selink/controller/user',
    'selink-inquiry-directive': 'js/selink/directive/inquiry',
  },

  shim: {
    'bootstrap': ['jquery'],
    'fastclick': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'angular-route': ['angular'],
    'selink': ['angular'],
    'selink-user-service': ['selink'],
    'selink-inquiry-service': ['selink'],
    'selink-user-controller': ['selink'],
    'selink-inquiry-directive': ['selink'],
    'jpreloader': ['jquery'],
    'cubeportfolio': ['jquery'],
  }

});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
  'fastclick',
  'jpreloader',
  'back2top',
  'bootstrap',
  'tween-max',
  'angular-route',
  'selink-user-service',
  'selink-inquiry-service',
  'selink-user-controller',
  'selink-inquiry-directive',
  'jquery.fileupload',
  'cubeportfolio'
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

    // hide loader
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

  // Application
  var handleApp = function() {

    $('#fileupload').fileupload({
      dataType: 'json',
      done: function(e, data) {
        console.log(data);
        // $.each(data.result.files, function(index, file) {
        //   $('<p/>').text(file.name).appendTo(document.body);
        // });
      }
    });

    angular.module('e-business', ['ngRoute', 'selink'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          template: '<p>page1</p>'
        }).when('/pictures', {
          template: '<p>page2</p>'
        }).when('/pages', {
          template: '<p>page3</p>'
        }).when('/contacts', {
          templateUrl: 'template/contact.html',
          controller: 'InquiryController as ctrl'
        }).when('/profile', {
          template: '<p>page5</p>'
        });
      }])
      .controller('InquiryController', ['InquiryService', function(InquiryService) {

        var self = this;

        InquiryService.index().then(function(response) {
          self.inquiries = response.data;
        });

      }])
      .controller('MainController', ['$http', function($http) {

        var self = this;

        // $http.get('/pictures').then(function(resp) {
        //   console.log(resp);
        //   self.pictures = resp.data;

        //   setTimeout(function() {

        //     // init cubeportfolio
        //     $('#grid-container').cubeportfolio({
        //       defaultFilter: '*',
        //       animationType: 'fadeOut',
        //       gapHorizontal: 0,
        //       gapVertical: 0,
        //       gridAdjustment: 'responsive',
        //       caption: 'zoom',
        //       displayType: 'sequentially',
        //       displayTypeSpeed: 100,
        //       // lightbox
        //       lightboxDelegate: '.cbp-lightbox',
        //       lightboxGallery: true,
        //       lightboxTitleSrc: 'data-title',
        //       lightboxShowCounter: true,
        //       // singlePage popup
        //       singlePageDelegate: '.cbp-singlePage',
        //       singlePageDeeplinking: true,
        //       singlePageStickyNavigation: true,
        //       singlePageShowCounter: true,
        //       singlePageCallback: function(url, element) {
        //         // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        //       },
        //       // singlePageInline
        //       singlePageInlineDelegate: '.cbp-singlePageInline',
        //       singlePageInlinePosition: 'below',
        //       singlePageInlineShowCounter: true,
        //       singlePageInlineInFocus: true,
        //       singlePageInlineCallback: function(url, element) {

        //         // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
        //         var t = this;

        //         $.ajax({
        //             url: url,
        //             type: 'GET',
        //             dataType: 'html',
        //             timeout: 5000
        //           })
        //           .done(function(result) {

        //             t.updateSinglePageInline(result);

        //           })
        //           .fail(function() {
        //             t.updateSinglePageInline("Error! Please refresh the page!");
        //           });

        //       }
        //     });
        //   }, 1000);

        // }, function(resp) {
        //   console.log(resp);
        // });

      }]);

    angular.resumeBootstrap(['e-business']);
  };

});