'use strict';

//App Model Schema

const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
    name: String,
    jobtitle: String,
    company: String,
    email: String
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;