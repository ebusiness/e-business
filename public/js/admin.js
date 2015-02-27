requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'underscore': 'components/underscore/underscore',
    'moment': 'components/moment/moment',
    'angular': 'components/angular/angular',
    'angular-route': 'components/angular-route/angular-route',
    'fastclick': 'components/fastclick/lib/fastclick',
    'back2top': 'components/back-to-top/index',
    'tween-max': 'components/gsap/src/uncompressed/TweenMax',
    'jpreloader': 'components/jpreloader/js/jpreloader',
    'angular-upload': 'components/jquery-file-upload/js/jquery.fileupload-angular',
    'cubeportfolio': 'components/cube-portfolio/cubeportfolio/js/jquery.cubeportfolio',
    'isotope': 'components/isotope/dist/isotope.pkgd',
    'infinite': 'components/ngInfiniteScroll/build/ng-infinite-scroll',
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
    'infinite': ['angular'],
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
  'isotope',
  'underscore',
  'moment',
  'jpreloader',
  'back2top',
  'bootstrap',
  'tween-max',
  'angular-route',
  'infinite',
  'selink-user-service',
  'selink-inquiry-service',
  'selink-user-controller',
  'selink-inquiry-directive',
  'cubeportfolio'
], function(fastclick, isotope) {

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

    angular.module('e-business', ['ngRoute', 'infinite-scroll', 'selink'])
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
      .controller('InquiryController', ['$scope', 'InquiryService', function($scope, InquiryService) {

        var self = this;

        self.inquiries = [];
        self.isLoading = false;

        self.fetch = function() {
          self.isLoading = true;
          InquiryService.index(self.lastCreateDate).then(function(response) {
            var inquiries = response.data
            self.inquiries = self.inquiries.concat(inquiries);
            if (inquiries.length > 0)
              self.lastCreateDate = _.last(inquiries).createDate;
            self.isLoading = false;
          });
        };

      }])
      .controller('MainController', ['$http', function($http) {
        var self = this;
      }]);

    angular.resumeBootstrap(['e-business']);
  };

});