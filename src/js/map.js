var disabled = false;
var draggable = true;
var geocoder = new google.maps.Geocoder();

geocoder.geocode({
    address: '東京都港区芝2-28-8芝2丁目ビル10階'
}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        var mapOptions = {
            draggable: draggable == true ? true : false,
            center: results[0].geometry.location,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            disableDefaultUI: disabled,
            disableDoubleClickZoom: disabled,
            styles: [{
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
            }]
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
        });

        var map_changed = false;
        if (draggable) {
            google.maps.event.addListener(map, 'dragstart', function () {
                map_changed = true;
            });
        }

        var map_resize = function () {
            google.maps.event.trigger(map, 'resize');
            if (map_changed) {
                google.maps.event.removeListener(resize_listener);
            } else {
                map.setCenter(results[0].geometry.location);
            }
        };

        var resize_listener = google.maps.event.addDomListener(window, 'resize', map_resize);

        setTimeout(map_resize, 1000);
        google.maps.event.addDomListenerOnce(window, 'load', map_resize);
    }
});