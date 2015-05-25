angular.module('selink')
  .controller('UserInfoController', ['UserService', function(UserService) {

    var self = this;

    UserService.session().then(function() {
      self.user = UserService.user;
    });

  }]);