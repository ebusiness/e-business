// element reference
var $wrapper = $('.wrapper');
var $loading = $('#loading');
var $window = $(window);
var $header = $(".header-fixed .header-sticky");

// start proloader
$wrapper.jpreLoader({
  loaderVPos: '50%',
  autoClose: true
}, function() {

  // setup page
  handleFastClick();
  handleHeader();

  // display content
  TweenMax.to($wrapper, 0.7, {
    opacity: 1
  });

  // hide loader
  $loading.fadeOut('fast');

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