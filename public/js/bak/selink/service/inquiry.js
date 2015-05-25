angular.module('selink')
  .factory('InquiryService', ['$http', function($http) {

    return {

      create: function(user) {
        console.log(this)
        return $http.post('/inquiries', user);
      },

      index: function(before) {

        console.log(before);

        return $http.get('/inquiries', {
          params: {
            before: before
          }
        });
      }
    };

  }]);