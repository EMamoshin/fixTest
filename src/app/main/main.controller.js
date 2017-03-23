(function() {
  'use strict';

  angular
    .module('gulp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope) {
    var vm = this;
    $rootScope.title = "Система сложения";
  }
})();
