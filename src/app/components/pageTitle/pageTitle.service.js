(function() {
  'use strict';

  angular
    .module('gulp')
    .factory('pageTitle', pageTitle);

  /** @ngInject */
  function pageTitle() {
    var title = 'Система сложения';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle }
    };
  }
})();
