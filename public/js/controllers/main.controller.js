'use strict';

//App Controller
angular.module("awesomeapp")
.controller('mainCtrl', function($scope, $http, dataService){
    
    //CREATE & Update
    $scope.savePerson = (person) => {
        dataService.savePerson(person);
    }
    
    //READ
    dataService.getPeople(function(res) {
        $scope.people = res.data;
    });
    
    //DELETE
    $scope.deletePerson = (person, $index) => {
        dataService.deletePeople(person);
        $scope.people.splice($index, 1);
    }
})