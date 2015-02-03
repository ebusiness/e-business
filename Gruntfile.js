module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    requirejs: {

      // 'compile': {
      //   options: {
      //     appDir: "./public",
      //     baseUrl: "./",
      //     dir: "public-build",
      //     optimizeCss: "standard",
      //     modules: [{
      //       name: "home",
      //     }],
      //     paths: {
      //       'jquery': 'components/jquery/dist/jquery',
      //       'bootstrap': 'components/bootstrap/dist/js/bootstrap',
      //       'back2top': 'js/back-to-top',
      //       'tween-max': 'components/gsap/src/minified/TweenMax.min',
      //       'waypoints': 'components/waypoints/waypoints.min',
      //       'jpreloader': 'components/jpreloader/js/jpreloader.min',
      //       'touchswipe': 'components/jquery-touchswipe/jquery.touchSwipe.min',
      //       'rs-slider': 'components/revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min',
      //       'owl-carousel': 'components/OwlCarousel/owl-carousel/owl.carousel',
      //       'app-slider': 'js/plugins/revolution-slider',
      //       'app-carousel': 'js/plugins/owl-carousel',
      //       'app': 'js/app',
      //     },
      //     shim: {
      //       'bootstrap': ['jquery'],
      //       'back2top': ['jquery'],
      //       'tween-max': ['jquery'],
      //       'waypoints': ['jquery'],
      //       'jpreloader': ['jquery'],
      //       'rs-slider': ['touchswipe', 'tween-max'],
      //       'owl-carousel': ['bootstrap'],
      //       'app-slider': ['rs-slider'],
      //       'app-carousel': ['owl-carousel'],
      //       'app': ['bootstrap', 'back2top', 'tween-max', 'waypoints', 'jpreloader'],
      //     }
      //   }
      // }

      'compile-home': {
        options: {
          name: "home",
          baseUrl: "public",
          out: "./public/home-built.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/home.js"
        }
      },

      'compile-home-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/home.css",
          out: "./public/home-built.css",
        }
      }
    },

    jshint: {
      options: {
        ignores: ['public/js/lib/**', 'public/js/require.min.js']
      },
      all: ['app/**/*.js', 'config/**/*.js', 'public/js/']
    }
  });

  // Load the plugin that provides the "requirejs" task.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);

};