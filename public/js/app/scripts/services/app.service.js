'use strict';
const angular = require('angular');

// App Service
angular.module("awesomeapp")
.service('dataService', function($http){
    //CREATE & UPDATE
    this.savePerson = (person, cb) => {
        //if it does not have an ID
        if(!person._id) {
            //create a new person (post), callback
            $http.post('/api', person).then(cb);
        } else {
            //if it does have an ID, update existing person (put), callback
            $http.put('/api/' + person._id, person).then(cb);
        };
      };
    
    //READ: GET people from the api, callback
    this.getPeople = (cb) => {$http.get('/api').then(cb) };
    
    //DELETE: detele request then pass person to be spliced
    this.deletePerson = (person) => {
        $http.delete('/api/' + person._id).then(person);
    };

})