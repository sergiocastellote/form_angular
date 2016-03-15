(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($http, $scope, $mdDialog, MainFactory) {
        var vm = this;
        vm.array = [];
        vm.data = MainFactory.getObjData();
        vm.sentData = function() {
            MainFactory.setData(vm.data);
            vm.data.name.model = ""
            vm.data.surname.model = ""
            vm.data.password.model = ""
            vm.data.company.model = ""
        }

        vm.showUsers = function(ev) {
            $mdDialog.show({
                templateUrl: 'app/main/dialog.mat.html',
                clickOutsideToClose: true
            })
        };
    }
})();
