(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .directive('headerComponent', headerComponent);

    /** @ngInject */
    function headerComponent() {
        var directive = {
            restrict: 'E',
            scope: {
                // oneWay: '@',
                // twoWay: '=',
                // expr: '&'
                params: '='
            },
            templateUrl: 'app/components/header-component/header-component.html'
        };

        return directive;

    }

})();
