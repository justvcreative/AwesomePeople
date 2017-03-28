'use strict';

//App Controller
angular.module("awesomeapp")
.controller('mainCtrl', function($scope, $http, dataService){
    //CREATE & UPDATE
    $scope.savePerson = (person) => {
        dataService.savePerson(person, (res) => {
            $scope.getPeople();
        });
    }
    
    //READ
    $scope.getPeople = () => {
        dataService.getPeople((res) => {
            $scope.people = res.data
            console.log(res);
        });
    }
    
    $scope.getPeople();
    
    //DELETE
    $scope.deletePerson = (person, $index) => {
        dataService.deletePerson(person);
        $scope.people.splice($index, 1);
    }
})