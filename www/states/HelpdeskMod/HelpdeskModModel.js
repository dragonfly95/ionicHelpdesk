(function() {
  'use strict';

  angular.module('app')
    .factory('HelpdeskModModel', HelpdeskModModel);

  HelpdeskModModel.$inject = [];

  function HelpdeskModModel() {

    var model = {
      form: {
        title: '',
        content: ''
      }
    };

    return model;
  }
})();

