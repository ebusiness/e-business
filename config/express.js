var path = require('path'),
  http = require('http'),
  express = require('express'),
  favicon = require('static-favicon'),
  bodyParser = require('body-parser'),
  compression = require('compression'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  lessMiddleware = require('less-middleware'),
  errorhandler = require('errorhandler');

module.exports = function(config) {

  var app = express();

  // View directory
  app.set('views', path.join(config.root, '/app/views'));

  // View engine is jade
  app.set('view engine', 'jade');

  // Fav-icon
  app.use(favicon());

  // Compress all requests
  app.use(compression())

  // Logger use express-logger in production, otherwise use morgan
  if ('production' !== config.app.env)
    app.use(require('morgan')('dev'));
  else
    app.use(require('express-logger')({
      path: config.root + '/log/requests.log'
    }));

  // Parse application/json
  app.use(bodyParser.json());

  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded());

  // Override request method
  app.use(methodOverride());

  // Parse cookie before session
  app.use(cookieParser('cookie secret sauce'));

  /* TODO: CSRF support */

  // Less Middleware
  app.use(lessMiddleware('/less', {
    dest: '/css',
    pathRoot: path.join(config.root, 'public')
  }));

  // Public folder
  app.use(express.static(path.join(config.root, 'public')));
  app.use(express.static(path.join(config.root, 'bower_components')));

  // Error handler, not linked in production
  if ('production' !== config.app.env) {
    app.use(errorhandler());
  }

  // Routes
  require('./routes')(app, config);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('page/404');
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  return app;
};