'use strict';

//App Model Schema

const mongoose = require('mongoose');

//create a people schema
//person will have a name, job title, their company, and their email address
//all are strings
const peopleSchema = new mongoose.Schema({
    name: String,
    jobtitle: String,
    company: String,
    email: String
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;