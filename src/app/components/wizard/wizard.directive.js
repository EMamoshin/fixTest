(function() {
  'use strict';

  angular
    .module('gulp')
    .directive('additionWizard', additionWizard);

  /** @ngInject */
  function additionWizard() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/wizard/wizard.html',
      controller: AdditionWizardController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function AdditionWizardController($scope, $rootScope, $timeout) {
      var vm = this;
      vm.stepNumber = 1;
      vm.stepName = ["Ввод данных", "Подтверждение данных", "Расчет", "Результат"];

      vm.total = function () {
        return parseInt(vm.val1) + parseInt(vm.val2) + parseInt(vm.val3) || 0;
      };

      $scope.$watch('vm.stepNumber', function() {
        $rootScope.title = vm.stepName[vm.stepNumber-1];
      });

      vm.prev = function () {
        if (vm.stepNumber == 4) {
          vm.stepNumber = 1;
        } else {
          vm.stepNumber -= 1;
        }
        vm.val1 = vm.val2 = vm.val3 = "";
      };

      vm.next = function () {
        if (vm.stepNumber == 2) {
          $timeout(function(){
            vm.stepNumber = 4;
          }, 5000);
        }
        vm.stepNumber += 1;
      };
    }
  }

})();
