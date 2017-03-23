(function() {
  'use strict';

  angular
    .module('gulp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/addition', {
        templateUrl: 'app/addition/addition.html',
        controller: 'AdditionController',
        controllerAs: 'addition'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
