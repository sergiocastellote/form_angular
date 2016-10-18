(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($http, $scope, $mdDialog, MainFactory) {
        var vm = this;
        vm.saveUser = function() {
            MainFactory.setData(vm.form);
            MainFactory.cleanForm(vm.form);
        }

        vm.showUsers = function(ev) {
            $mdDialog.show({
                templateUrl: 'app/main-dialog/dialog.mat.html',
                clickOutsideToClose: true
            })
        };

    }
})();
