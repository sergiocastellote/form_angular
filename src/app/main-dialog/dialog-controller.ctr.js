(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .controller('DialogController', DialogController);

    /** @ngInject */
    function DialogController($http, $scope, MainFactory) {
        var vm = this;
        vm.data = MainFactory.getData();
    }
})();
