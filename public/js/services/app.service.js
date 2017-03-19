'use strict';

// App Service
angular.module("awesomeapp")
.service('dataService', function($http, $q){
    
    //CREATE & UPDATE
    this.savePerson = (people) => {
        let queue = [];
          people.forEach(function(person) {
              let req;
              //if it does not have an ID
              if(!person._id) {
                  //create a new person (post)
                  req = $http.post('/api', person);
              } else {
                  //if it does have an ID, update existing person (put)
                  req = $http.put('/api/' + person._id, person).then(function(result){
                      person = result.data.person;
                      return person;
                  });
              };
              queue.push(req);
          });
          return $q.all(queue).then(function(results){
              console.log('I saved ' + people.length + ' people!');
          });
      };
    
    //READ
    this.getPeople = (cb) => {$http.get('/api').then(cb) };
    
    //DELETE
    this.deletePerson = (person) => { 
        console.log(person.name + ' was deleted'); 
    };

})