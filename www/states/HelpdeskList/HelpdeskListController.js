(function() {
  'use strict';
  angular.module('app')
    .controller('HelpdeskListController', HelpdeskListController);

  HelpdeskListController.$inject = [
    'HelpdeskListModel'
  ];

  function HelpdeskListController(
    HelpdeskListModel
  ) {
    var vm = this;
    vm.Model = HelpdeskListModel;

  }
})();

