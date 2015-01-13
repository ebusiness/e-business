module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    requirejs: {

      'compile-home': {
        options: {
          name: "home",
          out: "./public/js/pages/home-built.js",
          preserveLicenseComments: false,
          mainConfigFile: "./public/home.js"
        }
      },

      'compile-home-css': {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/home.css",
          out: "./public/css/home-built.css",
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