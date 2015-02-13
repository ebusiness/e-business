angular.module('selink')
  .factory('InquiryService', ['$http', function($http) {

    return {

      create: function(user) {
        console.log(this)
        return $http.post('/inquiries', user);
      },

      index: function() {
        return $http.get('/inquiries');
      }
    };

  }]);