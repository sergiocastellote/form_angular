(function() {
  'use strict';

  angular
    .module('crudParaWeb')
    .directive('inputTextComponent', inputTextComponent);

  /** @ngInject */
  function inputTextComponent() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/input-text-component/input-text-component.mat.html',
      scope: {
          params: '='
      }
    };
    return directive;
  }

})();
