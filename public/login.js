requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': '/components/jquery/dist/jquery',
    'bootstrap': '/components/bootstrap/dist/js/bootstrap',
    'back2top': '/js/back-to-top',
    'tween-max': '/components/gsap/src/minified/TweenMax.min',
    'waypoints': '/components/waypoints/waypoints.min',
    'jpreloader': '/components/jpreloader/js/jpreloader.min',
    'app': '/js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery'],
    'app': ['bootstrap', 'back2top', 'tween-max', 'waypoints', 'jpreloader'],
  }

});

require(['app'], function(app) {

  // global init
  App.init();

});