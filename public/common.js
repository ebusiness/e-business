requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'app': ['bootstrap', 'back2top'],
  }

});

require(['app'], function(app) {
  App.init();
  $('#btn-download-resume').click(function() {
    window.location.href = "/resume-template";
    $('#privacy-modal').modal('hide');
  })
});