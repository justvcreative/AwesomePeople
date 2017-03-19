'use strict';

//Seed data

const People = require('./app.model');

//Seed the database if empty
People.count({}, (err, count) => {
    if(err) { throw err; }
    if(count > 0) return ;
    const peeps = require('./people.json');
    People.create(peeps, (err, persons) => {
        if(err) { throw err; }
    });
});