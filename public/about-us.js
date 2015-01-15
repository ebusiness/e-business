requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'tween-max': 'components/gsap/src/minified/TweenMax.min',
    'waypoints': 'components/waypoints/waypoints.min',
    'jpreloader': 'components/jpreloader/js/jpreloader.min',
    'modernizr': 'components/image-hover/js/modernizr',
    'image-hover': 'components/image-hover/js/touch',
    'flot': 'components/flot/jquery.flot',
    'flot-resize': 'components/flot/jquery.flot.resize',
    'counterup': 'components/counter-up/jquery.counterup.min',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'tween-max': ['jquery'],
    'waypoints': ['jquery'],
    'jpreloader': ['jquery'],
    'modernizr': ['jquery'],
    'image-hover': ['modernizr'],
    'flot': ['jquery'],
    'flot-resize': ['flot'],
    'counterup': ['waypoints'],
    'app': ['bootstrap', 'back2top', 'tween-max', 'waypoints', 'jpreloader'],
  }

});

require(['image-hover', 'flot-resize', 'counterup', 'app'], function(app) {

  // global init
  App.init();

  // init counter
  App.initCounter();

  // element reference
  $basicInfo = $('.service');
  $graph = $('#bar-graph');
  $clinets = $('.our-clients li');
  $history = $('.timeline-v1 li');

  // init tween
  TweenMax.set($basicInfo, {
    transformPerspective: 500,
    rotationX: 90,
    autoAlpha: 0
  });

  TweenMax.set($graph, {
    transformPerspective: 500,
    rotationX: 90,
    autoAlpha: 0
  });

  TweenMax.set($clinets, {
    transformPerspective: 500,
    rotationY: 180,
    autoAlpha: 0
  });

  TweenMax.set($history, {
    y: '+=80',
    autoAlpha: 0
  });

  // setup waypoints
  $('#company-info').waypoint(function() {
    TweenMax.staggerTo($basicInfo, 0.5, {
      rotationX: 0,
      autoAlpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });

  $('#graph').waypoint(function() {
    TweenMax.to($graph, 0.5, {
      rotationX: 0,
      autoAlpha: 1
    });
  }, {
    offset: '70%',
    triggerOnce: true
  });

  $('.job-partners').waypoint(function() {
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

  // draw bar graph
  $.plot($("#bar-graph"), [{
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
      [26, 1500]
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
      max: 1600,
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

});