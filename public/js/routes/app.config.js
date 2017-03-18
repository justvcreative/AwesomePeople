'use strict';

// App Routes
angular.module("awesomeapp")
    //Angular Routes
    .config(function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../js/template/app.template.html',
            controller: 'mainCtrl'
        });
    }
)