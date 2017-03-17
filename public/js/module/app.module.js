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
app.controller('mainCtrl', function($scope, $http, dataService){
    
    /*// load mock data
    $http({
        url: 'js/mock/people.json',
        method: 'GET'
    }).then(function(res){
        var people = res.data;
        $scope.people = people;
    });*/
    
    $scope.helloConsole = dataService.helloConsole;
    
    //CREATE
    $scope.createPerson = () => {
        return console.log('create a person');
    }
    //READ
    dataService.getPeople(function(res) {
        $scope.people = res.data;
    });
    
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

app.service('dataService', function($http){
    this.helloConsole = function() {
        console.log('this is the hello console service!');
    }
    
    this.getPeople = (cb) => {$http.get('js/mock/people.json').then(cb)};
});