'use strict';
const angular = require('angular');

//App Controller
angular.module("awesomeapp")
.controller('mainCtrl', function($scope, $http, dataService){
    //CREATE & UPDATE
    $scope.savePerson = (person) => {
        dataService.savePerson(person, (res) => {
            if ($scope.creating === true ) {
                //empty the input fields
                $scope.person = {};
                // set creating equal to false
                $scope.creating = false;
            }
            //refresh page and get people
            $scope.getPeople();
        });
    }
    
    //READ
    $scope.getPeople = () => {
        dataService.getPeople((res) => {
            $scope.people = res.data
        });
    }
    
    $scope.getPeople(); // call get people on initial page load
    
    //DELETE
    $scope.deletePerson = (person, $index) => {
        //remove person on the back end
        dataService.deletePerson(person);
        //remove person on the front end with the $index
        $scope.people.splice($index, 1);
    }
    
    //Reset Form on the Cancel Button when updating people
    $scope.reset = () => {
        $scope.getPeople();
    }
})