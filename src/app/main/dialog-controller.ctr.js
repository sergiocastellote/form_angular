(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .controller('DialogController', DialogController);

    /** @ngInject */
    function DialogController($http, $scope, $mdDialog, MainFactory) {
        var vm = this;
        vm.data = MainFactory.getData();
    }
})();
