(function () {
    'use strict';

    angular.module('app.directives.containerFocus', ['app'])
            .directive('containerFocus', containerFocus);
    containerFocus.$inject = [];

    function containerFocus() {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                    element[0].focus();
                    element[0].addEventListener("blur", keep);

                    //Keep focus
                    function keep() {
                        element[0].focus();
                    }
            }
        };
    }
})();