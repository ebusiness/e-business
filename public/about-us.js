requirejs.config({

  baseUrl: "./",

  paths: {
    'jquery': 'components/jquery/dist/jquery',
    'bootstrap': 'components/bootstrap/dist/js/bootstrap',
    'back2top': 'js/back-to-top',
    'modernizr': 'components/image-hover/js/modernizr',
    'image-hover': 'components/image-hover/js/touch',
    'flot': 'components/flot/jquery.flot',
    'flot-resize': 'components/flot/jquery.flot.resize',
    'app': 'js/app',
  },

  shim: {
    'bootstrap': ['jquery'],
    'back2top': ['jquery'],
    'modernizr': ['jquery'],
    'image-hover': ['modernizr'],
    'flot': ['jquery'],
    'flot-resize': ['flot'],
    'app': ['bootstrap', 'back2top', 'image-hover', 'flot-resize'],
  }

});

require(['app'], function(app) {
  App.init();
  $.plot($(".graph-1"), [{
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