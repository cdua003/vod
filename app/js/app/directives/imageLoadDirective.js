(function () {
    'use strict';

    angular.module('app.directives.imageLoad', ['app'])
            .directive('imageLoad', imageLoad);
    imageLoad.$inject = [];

    function imageLoad() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('load', function() {
                    scope.$apply(attrs.imageLoad);
                });
                element.bind('error', function(){
                    console.log('image could not be loaded');
                });
            }
        }
    }
})();
