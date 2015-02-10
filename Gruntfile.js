module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'public/',
            src: ['components/**', 'css/**', 'img/**', 'js/**', 'unify/**'],
            dest: 'public-build/'
          },
        ],
      },
    },

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
          name: "js/home",
          baseUrl: "public",
          out: "./public-build/js/home.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/js/home.js"
        }
      },

      'compile-about-us': {
        options: {
          name: "js/about-us",
          baseUrl: "public",
          out: "./public-build/js/about-us.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/js/about-us.js"
        }
      },

      'compile-recruitment': {
        options: {
          name: "js/recruitment",
          baseUrl: "public",
          out: "./public-build/js/recruitment.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/js/recruitment.js"
        }
      },

      'compile-contact': {
        options: {
          name: "js/contact",
          baseUrl: "public",
          out: "./public-build/js/contact.js",
          wrapShim: true,
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/js/contact.js"
        }
      },

      'compile-login': {
        options: {
          name: "js/login",
          baseUrl: "public",
          out: "./public-build/js/login.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/js/login.js"
        }
      },

      'compile-common': {
        options: {
          name: "js/common",
          baseUrl: "public",
          out: "./public-build/js/common.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/js/common.js"
        }
      },

      'compile-home-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/home.css",
          out: "./public-build/css/home.css",
        }
      },

      'compile-about-us-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/about-us.css",
          out: "./public-build/css/about-us.css",
        }
      },

      'compile-contact-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/contact.css",
          out: "./public-build/css/contact.css",
        }
      },

      'compile-login-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/login.css",
          out: "./public-build/css/login.css",
        }
      },

      'compile-common-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/common.css",
          out: "./public-build/css/common.css",
        }
      },

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

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'requirejs']);

};