angular.module('selink')
  .factory('UserService', ['$http', function($http) {

    return {

      login: function(user) {
        console.log(this)
        return $http.post('/login', user);
      },

      logout: function() {
        return $http.get('/logout');
      },

      session: function() {
        var self = this;
        return $http.get('/session').then(function(response) {
          self.user = response.data;
          return response;
        });
      }
    };

  }]);