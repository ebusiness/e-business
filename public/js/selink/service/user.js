angular.module('selink')
  .factory('UserService', ['$http', function($http) {

    return {

      login: function(user) {
        console.log(this)
        return $http.post('/login', user);
      },

      logout: function() {
        return $http.get('/logout');
      }
    };

  }]);