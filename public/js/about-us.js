// element reference
var $wrapper = $('.wrapper');
var $loading = $('#loading');
var $window = $(window);
var $header = $(".header-fixed .header-sticky");

var $counter = $('.counter');
var $companyInfoArea = $('#company-info');
var $companyInfo = $('.service');
var $organizationArea = $('#organization');
var $organization = $('#organization-chart');
var $barGraphArea = $('#graph');
var $barGraph = $('#bar-graph');
var $clinetsArea = $('.job-partners');
var $clinets = $('.our-clients li');
var $history = $('.timeline-v1 li');

// start proloader
$wrapper.jpreLoader({
  loaderVPos: '50%',
  autoClose: true
}, function() {

  // setup page
  handleFastClick();
  handleHeader();
  handleCounter();
  handleHover();
  handleFlot();
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

// Number Counter
var handleCounter = function() {
  $counter.counterUp({
    delay: 10,
    time: 1000
  });
};

// Image Hover
var handleHover = function() {

  // check for touch
  if (Modernizr.touch) {

    // run the forEach on each figure element
    [].slice.call(document.querySelectorAll("figure")).forEach(function(el, i) {

      // check if the user moves a finger
      var fingerMove = false;
      el.addEventListener("touchmove", function(e) {
        e.stopPropagation();
        fingerMove = true;
      });

      // always reset fingerMove to false on touch start
      el.addEventListener("touchstart", function(e) {
        e.stopPropagation();
        fingerMove = false;
      });

      // add hover class if figure touchend and fingerMove is false
      el.addEventListener("touchend", function(e) {
        e.stopPropagation();
        if (fingerMove == false) {
          $(el).addClass('hover');
          setTimeout(function() {
            $(el).removeClass('hover');
          }, 3000);
        }
      });

    });
  }
};

// Flot Chart
var handleFlot = function() {

  // draw bar graph
  $.plot($('#bar-graph'), [{
    label: "　社員数（人）",
    data: [
      [19, 5],
      [20, 22],
      [21, 14],
      [22, 30],
      [23, 60],
      [24, 90],
      [25, 135],
      [26, 185]
    ],
    lines: {
      show: true
    },
    points: {
      show: true
    },
    yaxis: 1
  }, {
    label: "　売上（百万円）",
    data: [
      [19, 30],
      [20, 160],
      [21, 80],
      [22, 200],
      [23, 360],
      [24, 630],
      [25, 1070],
      [26, 1700]
    ],
    bars: {
      show: true,
      barWidth: 0.6,
      align: "center"
    },
    yaxis: 2
  }], {
    yaxes: [{
      min: 0,
      max: 200,
      position: "right"
    }, {
      min: 0,
      max: 2000,
      position: "left"
    }],
    xaxis: {
      tickDecimals: 0,
      tickFormatter: function(val, axis) {
        return "H" + val.toFixed(axis.tickDecimals) + "年度";
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    legend: {
      noColumns: 1,
      position: "nw"
    }
  });
};

// Animation initialize
var handleAnimation = function() {

  // init tween
  TweenMax.set([$companyInfoArea, $organizationArea, $barGraphArea, $clinetsArea], {
    perspective: 800
  });

  TweenMax.set($companyInfo, {
    transformPerspective: 800,
    rotationX: 90,
    autoAlpha: 0
  });

  TweenMax.set($organization, {
    transformPerspective: 800,
    rotationX: 90,
    autoAlpha: 0
  });

  TweenMax.set($barGraph, {
    transformPerspective: 800,
    rotationX: 90,
    autoAlpha: 0
  });

  TweenMax.set($clinets, {
    transformPerspective: 800,
    rotationY: 180,
    autoAlpha: 0
  });

  TweenMax.set($history, {
    y: '+=80',
    autoAlpha: 0
  });
};

// Animation
var startAnimation = function() {

  // setup waypoints
  $companyInfoArea.waypoint(function() {
    TweenMax.staggerTo($companyInfo, 0.5, {
      rotationX: 0,
      autoAlpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });

  $organizationArea.waypoint(function() {
    TweenMax.to($organization, 0.5, {
      rotationX: 0,
      autoAlpha: 1
    });
  }, {
    offset: '70%',
    triggerOnce: true
  });

  $barGraphArea.waypoint(function() {
    TweenMax.to($barGraph, 0.5, {
      rotationX: 0,
      autoAlpha: 1
    });
  }, {
    offset: '70%',
    triggerOnce: true
  });

  $clinetsArea.waypoint(function() {
    TweenMax.staggerTo($clinets, 0.5, {
      rotationY: 0,
      autoAlpha: 1
    }, 0.3);
  }, {
    offset: '70%',
    triggerOnce: true
  });

  $history.each(function() {

    var $elements = $(this);

    $elements.waypoint(function() {
      TweenMax.to($elements, 1, {
        y: 0,
        autoAlpha: 1
      });
    }, {
      offset: '100%',
      triggerOnce: true
    });
  });
};
