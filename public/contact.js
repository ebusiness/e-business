requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'async': 'components/requirejs-plugins/src/async',
    'gmap': 'components/gmaps/gmaps',
    'sky-form': 'components/sky-forms/version-2.0.1/js/jquery.form.min',
    'validate': 'components/sky-forms/version-2.0.1/js/jquery.validate.min',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'gmap': ['async!http://maps.google.com/maps/api/js?sensor=true'],
    'app': ['bootstrap', 'back2top', 'gmap'],
  }

});

require(['app'], function(app) {
  App.init();

  var map = new GMaps({
    div: '#map',
    scrollwheel: false,
    lat: 35.6501828,
    lng: 139.7531093,
    zoom: 17
  });

  var marker = map.addMarker({
    lat: 35.6501828,
    lng: 139.7531093,
    title: 'E-Business Inc.'
  });
});