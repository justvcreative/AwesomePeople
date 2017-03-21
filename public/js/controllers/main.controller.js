'use strict';

//App Controller
angular.module("awesomeapp")
.controller('mainCtrl', function($scope, $http, dataService){
    //CREATE & UPDATE
    $scope.savePerson = (person) => {
        dataService.savePerson(person);
    }
    
    //READ
    dataService.getPeople( (res) => {
        let people = res.data
        $scope.people = people;
    });
    
    //DELETE
    $scope.deletePerson = (person, $index) => {
        dataService.deletePerson(person);
        $scope.people.splice($index, 1);
    }
})