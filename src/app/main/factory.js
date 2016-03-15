(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .factory('MainFactory', MainFactory);
    MainFactory.$inject = [];
    /* @ngInject */
    function MainFactory() {

        var objData = {
            name: {
                model: "",
                disabled: false,
                label: "Nombre"
            },
            surname: {
                model: "",
                disabled: false,
                label: "Apellido"
            },
            password: {
                model: "",
                disabled: false,
                label: "password"
            },
            company: {
                model: "",
                collection: [{ name: 'Google' },
                    { name: 'Mozilla' },
                    { name: 'Android' },
                    { name: 'Apple' }
                ]
            }
        };

        var array = [];

        var fac = {
            getData: getData,
            setData: setData,
            getObjData: getObjData
        };

        function getObjData() {
            return objData;
        }

        function setData(data) {
            array.push({
                name: data.name.model,
                surname: data.surname.model,
                password: data.password.model,
                company: data.company.model
            });
        }

        function getData() {
            return array;
        }

        return fac;
    }
})();
