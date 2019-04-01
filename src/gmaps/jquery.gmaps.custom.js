! function ($) {
  "use strict";

  var GoogleMap = function () {};

  var styles = [{
    "featureType": "landscape",
    "stylers": [{
      "hue": "#F1FF00"
    }, {
      "saturation": -27.4
    }, {
      "lightness": 9.4
    }, {
      "gamma": 1
    }]
  }, {
    "featureType": "road.highway",
    "stylers": [{
      "hue": "#0099FF"
    }, {
      "saturation": -20
    }, {
      "lightness": 36.4
    }, {
      "gamma": 1
    }]
  }, {
    "featureType": "road.arterial",
    "stylers": [{
      "hue": "#00FF4F"
    }, {
      "saturation": 0
    }, {
      "lightness": 0
    }, {
      "gamma": 1
    }]
  }, {
    "featureType": "road.local",
    "stylers": [{
      "hue": "#FFB300"
    }, {
      "saturation": -38
    }, {
      "lightness": 11.2
    }, {
      "gamma": 1
    }]
  }, {
    "featureType": "water",
    "stylers": [{
      "hue": "#00B6FF"
    }, {
      "saturation": 4.2
    }, {
      "lightness": -63.4
    }, {
      "gamma": 1
    }]
  }, {
    "featureType": "poi",
    "stylers": [{
      "hue": "#9FFF00"
    }, {
      "saturation": 0
    }, {
      "lightness": 0
    }, {
      "gamma": 1
    }]
  }];
  //creates map with markers
  GoogleMap.prototype.createMarkers = function ($container) {
      var map = new GMaps({
        div: $container,
        lat: 35.65025,
        lng: 139.75315,
        zoom: 15,
      });
      //sample markers, but you can pass actual marker data as function parameter
      map.addMarker({
        lat: 35.65025,
        lng: 139.75315,
        title: 'Office',
        infoWindow: {
          content: '<p>株式会社イー・ビジネス</p>'
        }
      });
      map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
      });

      map.setStyle("map_style");

      return map;
    },
    //init
    GoogleMap.prototype.init = function () {
      var $this = this;
      $(document).ready(function () {
        //with sample markers
        $this.createMarkers('#gmaps-markers');

      });
    },
    //init
    $.GoogleMap = new GoogleMap, $.GoogleMap.Constructor = GoogleMap;
}(window.jQuery),

//initializing 
function ($) {
  "use strict";
  $.GoogleMap.init();
}(window.jQuery);