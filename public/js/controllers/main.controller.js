'use strict';

//App Controller
angular.module("awesomeapp")
.controller('mainCtrl', function($scope, $http, dataService){
    
    //CREATE
    $scope.createPerson = (person) => {
        $scope.person = {
            "name": person.name,
            "jobtitle": person.jobtitle,
            "company": person.company,
            "email": person.email
        };
        $scope.people.push(person);
        return console.log(person.name + ' was created');
    }
    //READ
    dataService.getPeople(function(res) {
        $scope.people = res.data;
    });
    
    //UPDATE
    $scope.editPerson = (person) => {
        return console.log(person.name + ' was edited');
    }
    
    //DELETE
    $scope.deletePerson = (person, $index) => {
        dataService.deletePeople(person);
        $scope.people.splice($index, 1);
    }
})