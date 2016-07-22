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

        ////////////CONNNNNNNNNNNEEEEEEEEEEEECCCCCCCCCCTTTTTTTTTTTAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!
        $http({
            method: 'GET',
            url: 'http://localhost:8080/RestServiceJava/rest/ftocservice',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            console.log("hola");
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log("adios");
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
})();
