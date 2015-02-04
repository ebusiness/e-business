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
            src: ['components/**', 'css/**', 'img/**'],
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
          name: "home",
          baseUrl: "public",
          out: "./public-build/home.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/home.js"
        }
      },

      'compile-about-us': {
        options: {
          name: "about-us",
          baseUrl: "public",
          out: "./public-build/about-us.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/about-us.js"
        }
      },

      'compile-recruitment': {
        options: {
          name: "recruitment",
          baseUrl: "public",
          out: "./public-build/recruitment.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/recruitment.js"
        }
      },

      'compile-contact': {
        options: {
          name: "contact",
          baseUrl: "public",
          out: "./public-build/contact.js",
          wrapShim: true,
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/contact.js"
        }
      },

      'compile-login': {
        options: {
          name: "login",
          baseUrl: "public",
          out: "./public-build/login.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/login.js"
        }
      },

      'compile-common': {
        options: {
          name: "common",
          baseUrl: "public",
          out: "./public-build/common.js",
          // optimize: "none",
          preserveLicenseComments: false,
          mainConfigFile: "./public/common.js"
        }
      },

      'compile-home-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/home.css",
          out: "./public-build/home.css",
        }
      },

      'compile-about-us-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/about-us.css",
          out: "./public-build/about-us.css",
        }
      },

      'compile-contact-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/contact.css",
          out: "./public-build/contact.css",
        }
      },

      'compile-login-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/login.css",
          out: "./public-build/login.css",
        }
      },

      'compile-common-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/common.css",
          out: "./public-build/common.css",
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