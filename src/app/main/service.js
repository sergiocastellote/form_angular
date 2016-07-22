(function() {
    'use strict';
    angular
        .module('crudParaWeb')
        .service('MainService', MainService);

    MainService.$inject = ['ConnectionService'];
    /* @ngInject */
    function MainService(ConnectionService) {

        function receiveData(service) {
            // https://des1b.absapp.net/api/v1/entities_definition/
            return ConnectionService.receiveData(service);
        }



        this.receiveData = function(service) {
            return receiveData(service);

        };


    }
})();
