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
  loadParticles();
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
                if (url != window.location.pathname) {
                  window.history.pushState("", "", url);
                }
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

window.onpopstate = function (event) {
  var active = $(".cbp-singlePageInline-active");
  if(window.location.pathname == "/recruitment" && active.size() > 0) {
    active.find("a").click();
    return;
  }
  if (active.find("a").attr("href") == window.location.pathname) {
    return;
  }
  handleAutoload();
};

var particlesResize = function () {
  var oheight = 250;//$(".banner").height();
  if (!oheight){
    oheight = $(".banner").height();
    $(".banner").attr("oheight", oheight);
  }

  var height = $(window).height() - $("#particles-js").offset().top;
  if(height < oheight) {
    height = oheight;
  }
  $("#particles-js").height(height);

  var mtop = (height - $(".banner").height())*0.5;
  if(mtop < oheight) {
    mtop = oheight;
  }
  $(".banner").css({
    "position": "relative",
    "margin-top": "-" +mtop + "px",
    "height": mtop + "px"
  });
}
var loadParticles = function() {
  if ($("#particles-js").size() < 1) {
    return;
  }
  $(window).resize(function(){
    particlesResize();
  });
  particlesResize();

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })
}
