(function() {
  'use strict';

  angular.module('app')
    .factory('HelpdeskListModel', HelpdeskListModel);

  HelpdeskListModel.$inject = [];

  function HelpdeskListModel() {

    var model = {
      items: [
        {index:"index10"},
        {index:"index20"},
        {index:"index30"},
        {index:"index40"},
        {index:"index50"},
        {index:"index60"},
        {index:"index70"},
        {index:"index10"},
        {index:"index20"},
        {index:"index30"},
        {index:"index40"},
        {index:"index50"},
        {index:"index60"},
        {index:"index70"},
        {index:"index10"},
        {index:"index20"},
        {index:"index30"},
        {index:"index40"},
        {index:"index50"},
        {index:"index60"},
        {index:"index70"},
        {index:"index last"}
      ]
    };

    return model;
  }
})();

