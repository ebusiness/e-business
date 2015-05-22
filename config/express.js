var path = require('path'),
  http = require('http'),
  i18n = require('i18n'),
  express = require('express'),
  favicon = require('static-favicon'),
  session = require('express-session'),
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
  app.use(favicon(path.join(config.root, '/public/favicon.ico')));

  // Compress all requests
  app.use(compression());

  // Logger use express-logger in production, otherwise use morgan
  if ('production' !== config.app.env)
    app.use(require('morgan')('dev'));
  else
    app.use(require('express-logger')({
      path: config.root + '/log/requests.log'
    }));

  // Override request method
  app.use(methodOverride());

  // session
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8'
  }));

  // Parse application/json
  app.use(bodyParser.json());

  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded());

  // Parse cookie before session
  app.use(cookieParser('cookie secret sauce'));

  // i18n config
  i18n.configure({
    // setup some locales - other locales default to ja silently
    locales: ['ja', 'zh', 'en'],
    directory: config.root + '/config/locales',
    defaultLocale: 'ja',
    cookie: 'language',
    objectNotation: true
  });

  // i18n init parses req for language headers, cookies, etc.
  app.use(i18n.init);

  /* TODO: CSRF support */

  // Less Middleware
  app.use(lessMiddleware('/less', {
    dest: '/css',
    pathRoot: path.join(config.root, 'public')
  }));

  // Public folder
  if ('production' !== config.app.env)
    app.use(express.static(path.join(config.root, 'public')));
  else
    app.use(express.static(path.join(config.root, 'public-build')));

  // Error handler, not linked in production
  if ('production' !== config.app.env) {
    app.use(errorhandler());
  }

  // Set locale by URL parameter
  app.param('lang', function(req, res, next, lang) {
    if (lang) {
      req.setLocale(lang);
      res.cookie('language', lang, {
        maxAge: 900000,
        httpOnly: true
      });
    }
    next();
  });

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
        locale: req.getLocale(),
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
      locale: req.getLocale(),
      message: err.message,
      error: {}
    });
  });

  return app;
};