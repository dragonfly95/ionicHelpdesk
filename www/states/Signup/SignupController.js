(function() {
  'use strict';
  angular.module('app')
    .controller('SignupController', SignupController);

  SignupController.$inject = [
    'SignupModel'
  ];

  function SignupController(
    SignupModel
  ) {
    var vm = this;
    vm.Model = SignupModel;
  }
})();

