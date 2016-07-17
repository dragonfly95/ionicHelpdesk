/* global angular */
(function(angular) {
  'use strict';

  angular.module('app')
    .factory('AuthInterceptor', AuthInterceptor);

  AuthInterceptor.$inject = ['AppStorage'];

  function AuthInterceptor(AppStorage) {

    function request(req) {
      var token = AppStorage.token;
      if(token) {
        req.headers.Authorization = 'Bearer ' + token;
      }

      return req;
    }

    var interceptor = {
      request: request
    };

    return interceptor;


  }
})(angular);

