// App Module
const app = angular.module("awesomeapp", ["ngRoute"])
    .config(function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/', {
            templateUrl: '/js/template/app.template.html',
            controller: 'mainCtrl'
        }).otherwise('/');
    }
);

// Main Controller
app.controller('mainCtrl', function($scope, $http, dataService){
    $scope.person = { 
        "name": "John Rivera",
        "department": "Creative Services",
        "website": "hipster.com",
        "email": "jr@hipster.com"
    };
    
    //CREATE
    $scope.createPerson = () => {
        return console.log('create a person');
    }
    
    //READ
    dataService.getPeople = (res) => {
        console.log(res.data);
        return res.data;
    }
    
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

app.service('dataService', function($http) {
    // load mock data
    /*$http({
        url: 'js/staff.json',
        method: 'GET'
    }).then(function(res){
        var staff = res.data;
        $scope.staff = staff;
    });*/
    
    //READ
    this.getPeople = (cb) => { $http.get('js/mock/people.json').then(cb); }
});




