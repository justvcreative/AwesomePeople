'use strict';

// App Service
angular.module("awesomeapp")
.service('dataService', function($http){
    
    //READ
    this.getPeople = (cb) => {$http.get('js/mock/people.json').then(cb) };
    
    //DELETE
    this.deletePeople = (person) => { console.log(person.name + ' was deleted'); };
    
    //UPDATE
    this.savePeople = (person) => { console.log(person.name + ' was saved'); };
})