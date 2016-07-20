(function() {
  'use strict';

  angular.module('app')
  .factory('LoginModel', LoginModel);

  LoginModel.$inject = [];

  function LoginModel() {

    var model = {
      user: {
        email: '',
        password: ''
      }
    };

    return model;
  }
})();

