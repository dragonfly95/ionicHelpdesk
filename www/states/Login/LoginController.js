(function() {
  'use strict';
  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    '$ionicPopup', '$state',
    'LoginModel', 'Users', 'AppStorage'
  ];

  function LoginController( 
    $ionicPopup, $state,
    LoginModel, Users, AppStorage
  ) {
    var vm = this;
    vm.Model = LoginModel;
    vm.login = login;

    //==========================
    // implements functions
    //==========================

    function login() {

      Users.login({}, vm.Model.user).$promise
        .then(function(userWrapper) {

console.log(userWrapper);

          AppStorage.user = userWrapper.user;
          AppStorage.token = userWrapper.token;

          return $ionicPopup.alert({
            title:'성공',
            template:'성공'
          });
        })
        .then(function() {
          $state.go('main.faqList');
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  } 

})();

