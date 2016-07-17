(function() {
  'use strict';

  angular.module('app')
    .factory('SignupModel', SignupModel);

  SignupModel.$inject = [];

  function SignupModel() {

    var model = {
      form: {
        title: '',
        content: ''
      }
    };

    return model;
  }
})();

