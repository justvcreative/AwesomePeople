// App Module
const app = angular.module("awesomeapp", ["ui.router"])
    //Angular Routes
    .config(function config($stateProvider, $urlRouterProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/js/template/app.template.html',
            controller: 'mainCtrl'
        })
            .when('/add', {
            templateUrl: 'js/template/add-person.template.html',
            controller: 'mainCtrl'
        })
            .otherwise('/');
    }
);

// Main Controller
app.controller('mainCtrl', function($scope, $http){
    
    $scope.person = { 
        "name": "John Rivera",
        "job-title": "Designer",
        "department": "Creative Services",
        "website": "hipster.com",
        "email": "jr@hipster.com"
    };
    
    //CREATE
    $scope.createPerson = () => {
        return console.log('create a person');
    }
    //READ
    
    //UPDATE
    $scope.editPerson = () => {
        return console.log('edit a person');
    }
    
    $scope.savePerson = () => {
        return console.log('save a person');
    }
    //DELETE
    $scope.deletePerson = () => {
        return console.log('delete a person');
    }
});