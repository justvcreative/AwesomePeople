'use strict';
const angular = require('angular');

// App Directives
angular.module("awesomeapp")
    //People Directive
    .directive('people', ()=> {
        return {
            restrict: 'E',
            templateUrl: '../js/app/scripts/template/people.template.html',
            controller: 'mainCtrl'
        };
    })
    //Add Person Directive
    .directive('addPerson', () => {
        return {
            restrict: 'E',
            templateUrl: '../js/app/scripts/template/add-person.template.html',
            controller: 'mainCtrl'
        };
})