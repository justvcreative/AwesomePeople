'use strict';

// App Directives
angular.module("awesomeapp")
    //People Directive
    .directive('people', ()=> {
        return {
            restrict: 'E',
            templateUrl: '../js/template/people.template.html',
            controller: 'mainCtrl'
        };
    })
    //Add Person Directive
    .directive('addPerson', () => {
        return {
            restrict: 'E',
            templateUrl: '../js/template/add-person.template.html',
            controller: 'mainCtrl'
        };
})