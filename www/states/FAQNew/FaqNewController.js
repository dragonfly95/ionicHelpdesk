(function() {
  'use strict';
  angular.module('app')
    .controller('FaqNewController', FaqNewController);

  FaqNewController.$inject = [
    '$state','$scope',
    'FaqNewModel','$firebase'
  ];

  function FaqNewController(
    $state,$scope,
    FaqNewModel,$firebase
  ) {


    var ref = new Firebase("https://onnurihelpdesk.firebaseio.com/faq");
    var sync = $firebase(ref);


    var vm = this;
    vm.Model = sync.$asArray();
    vm.faqPost = faqPost;

    function faqPost() {
      console.log('firebase !!');
      console.log(vm.Model.faq);

      if(vm.Model.faq.titles === '') {
        return;
      }
      if(vm.Model.faq.contents === '') {
        return;
      }

      vm.Model.$add(vm.Model.faq);
      // $state.go('main.faqList');
    }
  }
})();
