(function() {
  'use strict';

  angular
    .module('crudParaWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
