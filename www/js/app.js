// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ionic',
  'ngResource',
  'ngStorage'
])

.run(function($ionicPlatform, $window, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      $window.cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      $window.StatusBar.styleDefault();
    }
  });

  //stateChange event
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    console.log('stateChangeStart event trigger');
      // if (toState.authRequired && !Auth.isAuthenticated()){ //Assuming the AuthService holds authentication logic
      //   // User isn’t authenticated
      //   $state.transitionTo("login");
      //   event.preventDefault(); 
      // }
  });

})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'states/Login/Login.html',
    controller: 'LoginController as vm'
  })

  .state('findpwd', {
    url: '/findpwd',
    templateUrl: 'states/FindPassword/findPassword.html',
    controller: 'FindPasswordController as vm'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'states/Signup/Signup.html',
    controller: 'SignupController as vm'
  })

  // setup an abstract state for the tabs directive
  .state('main', {
    url: '/main',
    abstract: true,
    templateUrl: 'templates/main.html'
  })

  // Each tab has its own nav history stack:

  .state('main.faqNew', {
    url: '/faqNew',
    views: {
      'tab-dash': {
        templateUrl: 'states/FAQNew/FaqNew.html',
        controller: 'FaqNewController as vm'
      }
    }
  })

  .state('main.faqDetail', {
    // url: '/faqDetail/:id',
    url: '/faqDetail/{id}?id2&id3',
    views: {
      'tab-dash': {
        templateUrl: 'states/FAQDetail/FaqDetail.html',
        controller: 'FaqDetailController as vm'
      }
    }
  })

  .state('main.faqList', {
    url: '/faqList',
    views: {
      'tab-dash': {
        templateUrl: 'states/FAQList/FaqList.html',
        controller: 'FaqListController as vm'
      }
    }
  })



  .state('main.helpdeskList', {
    url: '/helpdeskList',
    views: {
      'tab-chats': {
        templateUrl: 'states/HelpdeskList/HelpdeskList.html',
        controller: 'HelpdeskListController as vm'
      }
    }
  })
  .state('main.helpdeskNew', {
    url: '/helpdeskNew',
    views: {
      'tab-chats': {
        templateUrl: 'states/HelpdeskNew/HelpdeskNew.html',
        controller: 'HelpdeskNewNewController as vm'
      }
    }
  })
  .state('main.helpdeskMod', {
    url: '/helpdeskMod',
    views: {
      'tab-chats': {
        templateUrl: 'states/HelpdeskMod/HelpdeskMod.html',
        controller: 'HelpdeskModController as vm'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
