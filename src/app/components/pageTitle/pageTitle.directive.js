(function() {
  'use strict';

  angular
    .module('gulp')
    .directive('title', ['$rootScope', '$timeout', title]);

  /** @ngInject */
  function title($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle)
              ? toState.data.pageTitle
              : 'Default title';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }

})();
