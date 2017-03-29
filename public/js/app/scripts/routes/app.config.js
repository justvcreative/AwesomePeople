'use strict';
const angular = require('angular');

// App Routes
angular.module("awesomeapp")
    //Angular Routes
    .config(function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../js/app/scripts/template/app.template.html',
            controller: 'mainCtrl'
        });
    }
)