angular.module('selink')
  .directive('inquiry', [function() {

    return {
      // templateUrl: 'js/selink/template/inquiry.html',
      transclude: 'element',
      restrict: 'A',
      scope: {
        inquiry: '='
      },
      link: function($scope, $element, $attrs, ctrl, $transclude) {

        var inquiry = $scope.$eval($attrs.inquiry);

        var instance = $transclude($scope.$new(), function(clonedElement, newScope) {
          newScope.inquiry = inquiry;
        });

        $element.after(instance);
      }
    };

  }]);