'use strict';

//app.js file for webpack to bundle all front end js

const angular = require('angular');

angular.module('todoListApp', []);

require('./scripts/module/app.module.js')
require('./scripts/controllers/main.controller.js');
require('./scripts/routes/app.config.js');
require('./scripts/directives/app.directive.js');
require('./scripts/services/app.service.js');