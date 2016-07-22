(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($http, $scope, $mdDialog, MainFactory, MainService) {
        var vm = this;
        vm.array = [];
        // vm.data = MainFactory.getObjData();
        vm.sentData = function() {
            MainFactory.setData(vm.form);
            MainFactory.cleanForm(vm.form);
            // vm.form.name = ""
            // vm.form.surname = ""
            // vm.data.password.model = ""
            // vm.data.company.model = ""
        }

        vm.showUsers = function(ev) {
            $mdDialog.show({
                templateUrl: 'app/main/dialog.mat.html',
                clickOutsideToClose: true
            })
        };

        var service = 'ftocservice'
        MainService.receiveData(service).then(function successCallback(response) {
            vm.data = response.data;
            MainFactory.setInitData(vm.data);
        }, function errorCallback(response) {
        });

    }
})();
