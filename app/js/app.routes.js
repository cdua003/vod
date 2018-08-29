(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/video/list');
        $urlRouterProvider.when('/', '/video/list');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('root', {
                abstract: true,
                url: '/',
                data: {
                    title: 'Home'
                },
                views: {
                    'footer': {
                        templateUrl: 'views/footerView.html'
                    }
                }
            })
            .state('root.video', {
                abstract: true,
                url: 'video',
                data: {
                    title: 'Video'
                }
            })
            .state('root.video.list', {
                url: '/list',
                data: {
                    title: 'Video list'
                },
                views: {
                    'content@': {
                        templateUrl: 'views/videoList.html',
                    }
                }
            })
    }
})();
