(function() {
  'use strict';

  angular.module('app')
    .factory('FaqNewModel', FaqNewModel);

  FaqNewModel.$inject = [];

  function FaqNewModel() {

    var model = {
      faq: {
        titles: '',
        contents: ''
      }
    };

    return model;
  }

})();
