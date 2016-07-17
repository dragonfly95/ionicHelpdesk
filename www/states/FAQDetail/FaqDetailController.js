(function() {
  'use strict';
  angular.module('app')
    .controller('FaqDetailController', FaqDetailController);

  FaqDetailController.$inject = [
    'FaqDetailModel'
    ,'$stateParams'
  ];

  function FaqDetailController(
    FaqDetailModel,
    $stateParams
  ) {
    console.log($stateParams);
    var vm = this;
    vm.Model = FaqDetailModel;
  }
})();

