(function() {
  'use strict';

  angular.module('app')
    .factory('FaqDetailModel', FaqDetailModel);

  FaqDetailModel.$inject = [];

  function FaqDetailModel() {

    var model = {
      form: {
        title: '',
        content: ''
      }
    };

    return model;
  }
})();

