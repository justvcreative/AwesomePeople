// App Module
const app = angular.module("awesomeapp", ["ui.router"])
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
);

// Main Controller
app.controller('mainCtrl', function($scope, $http){
    
    // load mock data
    $http({
        url: 'js/mock/people.json',
        method: 'GET'
    }).then(function(res){
        var people = res.data;
        $scope.people = people;
    });
    
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