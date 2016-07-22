(function() {
    'use strict';
    angular
        .module('crudParaWeb')
        .service('ConnectionService', ConnectionService);

    ConnectionService.$inject = ['$http'];
    /* @ngInject */
    function ConnectionService($http) {

        var url = 'http://localhost:8080/RestServiceJava/rest/';

        function receiveData(service) {
            return $http({
                method: 'GET',
                url: url + service,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        }

        this.receiveData = function(service) {
            return receiveData(service);

        };


    }
})();
