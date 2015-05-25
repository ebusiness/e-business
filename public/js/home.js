// element reference
var $wrapper = $('.wrapper');
var $loading = $('#loading');
var $window = $(window);
var $header = $(".header-fixed .header-sticky");

var $banner = $('.tp-banner');
var $thumbnails = $('.thumbnails');
var $subcate = $('#sub-cate');

// start proloader
$wrapper.jpreLoader({
  loaderVPos: '50%',
  autoClose: true
}, function() {

  // setup page
  handleFastClick();
  handleHeader();
  handleSlider();
  handleAnimation();

  // display content
  TweenMax.to($wrapper, 0.7, {
    opacity: 1
  });

  // hide loader then start animation
  $loading.fadeOut('fast', startAnimation);

});

// Fast Click
var handleFastClick = function() {
  FastClick.attach(document.body);
};

// Fixed Header
var handleHeader = function() {

  $window.scroll(function() {
    if ($window.scrollTop() > 100) {
      $header.addClass("header-fixed-shrink");
    } else {
      $header.removeClass("header-fixed-shrink");
    }
  });
};

// Slider
var handleSlider = function() {

  $banner.revolution({
    delay: 9000,
    startwidth: 870,
    startheight: 400,
    hideThumbs: 10,
    navigationStyle: "preview4"
  });
};

// Animation initialize
var handleAnimation = function() {

  // init tween
  TweenMax.set($subcate, {
    perspective: 800,
  });

  // init tween
  TweenMax.set($thumbnails, {
    transformPerspective: 800,
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    rotationY: 90,
    autoAlpha: 0
  });
};

// Animation
var startAnimation = function() {

  // setup waypoints
  $subcate.waypoint(function() {
    TweenMax.staggerTo($thumbnails, 1, {
      rotationY: 0,
      autoAlpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });
};
