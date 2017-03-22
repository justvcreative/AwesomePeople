// Set Up Server and Listen on Port

const express = require('express');

const config = require('./config/config');
const router = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');

//call the database and seed the data
require('./database');
require('./models/seed');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/node_modules',express.static(path.join(__dirname, '../node_modules')));
app.use(router);

app.listen(config.port, function() {
  console.log("I AM LISTENING ON PORT " + config.port + "!!!");
});