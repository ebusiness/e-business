requirejs.config({

  baseUrl: "/",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'angular': 'components/angular/angular.min',
    'back2top': 'js/back-to-top',
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
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'jpreloader': ['jquery'],
    'app': ['bootstrap', 'back2top', 'tween-max', 'jpreloader', 'angular-upload'],
  }

});

window.name = "NG_DEFER_BOOTSTRAP!";

require(['app'], function(app) {

  // global init
  App.init();

  angular.module('FileUpload', ['blueimp.fileupload']);

  angular.resumeBootstrap(['FileUpload']);

  $('#fileupload').fileupload({
    dataType: 'json',
    done: function(e, data) {
      console.log(data);
      // $.each(data.result.files, function(index, file) {
      //   $('<p/>').text(file.name).appendTo(document.body);
      // });
    }
  });

});