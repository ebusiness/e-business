var path = require('path'),
  express = require('express'),
  favicon = require('serve-favicon'),
  compression = require('compression'),
  lessMiddleware = require('less-middleware'),
  errorhandler = require('errorhandler');

module.exports = function(config) {

  var app = express();
  //redirect to https
  if (config.https) {
    app.use (function (req, res, next) {
      if (!req.secure) {
        var host = req.hostname + ":" + ( config.https.port || 8443 );
        res.redirect('https://' + host + req.url);
        return;
      }
      return next();
    });
  }
  // View directory
  app.set('views', path.join(config.root, '/app/views'));

  // View engine is jade
  app.set('view engine', 'jade');

  // Fav-icon
  app.use(favicon(path.join(config.root, '/public/favicon.ico')));

  // Compress all requests
  app.use(compression());

  // dev setting
  if ('production' !== config.app.env) {

    // Logger use morgan
    app.use(require('morgan')('dev'));

    // Less Middleware
    // app.use(lessMiddleware('/less', {
    //   dest: '/css',
    //   pathRoot: path.join(config.root, 'public')
    // }));

    // Public folder
    // app.use(express.static(path.join(config.root, 'public')));
    app.use(express.static(path.join(config.root, 'public-build')));

    // Error handler, not linked in production
    app.use(errorhandler());

  }
  // production setting
  else {

    // Logger use express-logger
    app.use(require('express-logger')({
      path: config.root + '/log/requests.log'
    }));

    // Public folder
    app.use(express.static(path.join(config.root, 'public-build')));
  }

  // Routes
  require('./routes')(app, config);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
