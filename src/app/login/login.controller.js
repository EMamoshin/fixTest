(function() {
  'use strict';

  angular
    .module('gulp')
    .controller('LoginController', ['$scope', '$rootScope', '$location', 'LoginService', LoginController]);

  /** @ngInject */
  function LoginController($scope, $rootScope, $location, LoginService) {
    var vm = this;
    $rootScope.title = "Авторизация";
    LoginService.ClearCredentials();

    vm.login = function () {
      $scope.dataLoading = true;
      LoginService.Login($scope.email, $scope.password, function(response) {
          LoginService.SetCredentials($scope.email, $scope.password);
          $location.path('/addition');
          $scope.dataLoading = false;
      });
    };
  }
})();
