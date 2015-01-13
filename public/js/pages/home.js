requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'rs-slider-tools': 'components/revolution-slider/rs-plugin/js/jquery.themepunch.tools.min',
    'rs-slider': 'components/revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min',
    'owl-carousel': 'components/OwlCarousel/owl-carousel/owl.carousel',
    'app-slider': 'js/plugins/revolution-slider',
    'app-carousel': 'js/plugins/owl-carousel',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'rs-slider-tools': ['bootstrap'],
    'rs-slider': ['rs-slider-tools'],
    'owl-carousel': ['bootstrap'],
    'app-slider': ['rs-slider'],
    'app-carousel': ['owl-carousel'],
    'app': ['back2top', 'app-slider', 'app-carousel'],
  }

});

require(['app'], function(app) {
  App.init();
  RevolutionSlider.initRSfullWidth();
  OwlCarousel.initOwlCarousel();
});