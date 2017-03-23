(function() {
  'use strict';

  angular
    .module('gulp')
    .controller('AdditionController', ['$scope', '$rootScope', AdditionController]);

  /** @ngInject */
  function AdditionController($scope, $rootScope) {
    var vm = this;
    $rootScope.title = "Операция сложения";

    vm.getShortName = function () {
      var email = $rootScope.globals.currentUser.email;
      var temp = email.match(/.*@\w(\w+)/);
      var temp2 = temp[1].replace(/\w/g, '*');
      return email.replace(/(@)(\w)(\w+)/g, '$1$2'+temp2);
    };


  }
})();
