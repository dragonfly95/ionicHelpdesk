(function() {
  'use strict';
  angular.module('app')
    .controller('HelpdeskModController', HelpdeskModController);

  HelpdeskModController.$inject = [
    'HelpdeskModModel'
  ];

  function HelpdeskModController(
    HelpdeskModModel
  ) {
    var vm = this;
    vm.Model = HelpdeskModModel;
  }
})();

