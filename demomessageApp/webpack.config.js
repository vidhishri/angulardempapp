var webpack = require('webpack'),
  path = require('path');

module.exports = {
    entry: {
           app: './app/app.js'
           
    },
    output: {
        path: __dirname+'/app',
        filename: "bundle.js"
    }
    
};
