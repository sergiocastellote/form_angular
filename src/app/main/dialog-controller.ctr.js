(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .controller('DialogController', DialogController);

    /** @ngInject */
    function DialogController($http, $scope, $mdDialog, MainFactory, ConnectionService) {
        var vm = this;

        ConnectionService.receiveData().then(function succes(response) {
            vm.data = response.data;
            console.log(response);
        }, function error(response) {

        });
    }
})();
