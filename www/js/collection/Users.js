 (function() {
  'use strict';

  angular.module('app')
    .factory('Users', Users);

  Users.$inject = [
    '$resource',
    'SERVER_URL'
  ];

  function Users(
    $resource,
    SERVER_URL
    ) {
      var url = SERVER_URL + '/rest/api/:uri/:uri2';

      let params = { uri: '@uri' };

      let actions = {
        register: {
          method: 'POST',
          params: {
            uri: 'register'

          }
        },
        login: {
          method: 'POST',
          params: {
            uri: 'login',
            uri2: 'auth'
          }
        }
      };


      let Service = $resource(url, params, actions);

console.log(url);
console.log(params);
console.log(actions);

      return Service;

  }
})();
