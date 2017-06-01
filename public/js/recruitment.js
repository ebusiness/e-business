// element reference
var $wrapper = $('.wrapper');
var $loading = $('#loading');
var $window = $(window);
var $header = $(".header-fixed .header-sticky");

var $recruitInfoArea = $('#recruit-info');
var $recruitInfo = $('.service');

// start proloader
$wrapper.jpreLoader({
  loaderVPos: '50%',
  autoClose: true
}, function() {

  // setup page
  handleFastClick();
  handleHeader();
  handleModal();
  handleAnimation();
  handleNextpage();
  handleCbp();
  handleAutoload();

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

// Resume Template Download
var handleModal = function() {
  $('#btn-download-resume').click(function() {
    window.location.href = "/resume-template";
    $('#privacy-modal').modal('hide');
  })
};

// Animation initialize
var handleAnimation = function() {

  // init tween
  TweenMax.set($recruitInfoArea, {
    perspective: 800
  });

  TweenMax.set($recruitInfo, {
    transformPerspective: 800,
    rotationX: 90,
    autoAlpha: 0
  });
};

// Animation
var startAnimation = function() {

  // setup waypoints
  $recruitInfoArea.waypoint(function() {
    TweenMax.staggerTo($('.modal-body .service'), 0.5, {
      rotationX: 0,
      autoAlpha: 1
    }, 0.3);
    TweenMax.staggerTo($('.col-sm-7 .service'), 0.5, {
      rotationX: 0,
      autoAlpha: 1
    }, 0.3);
    TweenMax.staggerTo($('.col-sm-5 .service'), 0.5, {
      rotationX: 0,
      autoAlpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });

};

// Nextpage
var handleNextpage = function() {
  $('#link-btn-graduates').click(function () {
    window.location.href = "/recruitment/graduates";
  });
  $('#link-btn-career').click(function () {
    window.location.href = "/recruitment/career";
  });
};

// cubeportfolio init
var handleCbp = function() {
  $('#grid-container').cubeportfolio({
        caption: '',
        singlePageInlinePosition: 'below',
        gapHorizontal: 25, // this affects the vertical gap!
        gapVertical: 55, // this affects the horizontal gap!
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        singlePageInlineCallback: function (url, element) {
            var t = this;

            $.ajax({
                url: url + "?ajax=1",
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
            .done(function (result) {

                t.updateSinglePageInline(result);

            })
            .fail(function () {
                t.updateSinglePageInline("Error! Please refresh the page!");
            });
        }
    });
}

var handleAutoload = function() {
  var pathname = window.location.pathname;
  $("a[href='"+ pathname +"']").click()
}

var initFancybox = function () {
    $(".fancybox").fancybox({
    groupAttr: 'data-rel',
    prevEffect: 'fade',
    nextEffect: 'fade',
    openEffect  : 'elastic',
    closeEffect  : 'fade',
    closeBtn: true,
    helpers: {
        title: {
                type: 'float'
            }
        }
    });
}

var initOwlCarousel = function () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: 3000,
    dots: false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  })
}
