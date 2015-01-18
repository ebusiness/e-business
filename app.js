var env = process.env.NODE_ENV || 'development',
  config = require('./config/global')[env],
  fs = require('fs'),
  mongoose = require('mongoose');

GLOBAL.config = config;

// Connect to MongoDB
mongoose.connect(config.mongodb.host);
mongoose.connection.on('open', function() {
  if ('production' !== config.app.env) mongoose.set('debug', true);
  console.log("DataBase " + config.mongodb.host + " connected.");
});

// Load MongoDB models
var models_path = config.root + '/app/models';
fs.readdirSync(models_path).forEach(function(file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file);
});

// Create Exrepss Server
var app = require('./config/express')(config);

module.exports = app;