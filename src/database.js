'use strict';
// Database

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/awesomepeople', function(err){
    if(err) {
        console.log('Failure connecting to MongoDB!');
    } else {
        console.log('You have sucessfully connected MongoDB!');
    }
});