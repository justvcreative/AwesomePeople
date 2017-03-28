'use strict';

// App Service
angular.module("awesomeapp")
.service('dataService', function($http){
    //CREATE & UPDATE
    this.savePerson = (person, cb) => {
        //if it does not have an ID
        if(!person._id) {
            //create a new person (post)
            $http.post('/api', person).then(cb);
        } else {
            //if it does have an ID, update existing person (put)
            $http.put('/api/' + person._id, person).then(cb);
        };
      };
    
    //READ
    this.getPeople = (cb) => {$http.get('/api').then(cb) };
    
    //DELETE
    this.deletePerson = (person) => {
        $http.delete('/api/' + person._id).then(person);
    };

})