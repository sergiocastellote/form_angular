(function() {
    'use strict';
    angular
        .module('crudParaWeb')
        .service('ConnectionService', ConnectionService);

    ConnectionService.$inject = ['$http'];
    /* @ngInject */
    function ConnectionService($http) {

        var url = 'http://localhost:8080/RestServiceJava/rest/users';

        function receiveData() {
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        }

        this.receiveData = function() {
            return receiveData();

        };


    }
})();
