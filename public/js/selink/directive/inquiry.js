angular.module('selink')
  .directive('inquiry', [function() {

    return {
      templateUrl: 'js/selink/template/inquiry.html',
      restrict: 'A',
      scope: {
        inquiry: '='
      },
      link: function($scope, $element, $attrs) {

      }
    };

  }]);