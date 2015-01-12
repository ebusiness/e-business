/* Write here your custom javascript codes */
angular.module('login', [])
  .controller('main', [function() {

    var self = this;

    self.change = function() {
      self.email = 'joe_19840729@hotmail.com';
      self.password = '19840729'
    };

    self.submit = function() {
      console.log('User submit is: ', self.email, self.password);
    };

  }]);