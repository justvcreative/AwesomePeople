var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/public/js/app/',
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/public/js',
        filename: 'app.bundle.js'
    }
};