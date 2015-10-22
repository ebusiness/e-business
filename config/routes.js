var fs = require('fs'),
  path = require('path');

module.exports = function(app, config) {

  app.get('/', function(req, res, next) {
    res.render('page/home');
  });

  app.get('/home', function(req, res, next) {
    res.render('page/home');
  });

  app.get('/about-us', function(req, res, next) {
    res.render('page/about-us');
  });

  app.get('/services', function(req, res, next) {
    res.render('page/services');
  });

  app.get('/products', function(req, res, next) {
    res.render('page/products');
  });

  app.get('/recruitment', function(req, res, next) {
    res.render('page/recruitment');
  });

  app.get('/contact', function(req, res, next) {
    res.render('page/contact');
  });

  app.get('/login', function(req, res, next) {
    res.render('page/login');
  });

  app.get('/privacy', function(req, res, next) {
    res.render('page/privacy');
  });

  app.get('/terms-of-service', function(req, res, next) {
    res.render('page/terms-of-service');
  });

  app.get('/margin-rate', function(req, res, next) {
    res.render('page/margin-rate');
  });

  app.get('/resume-template', function(req, res, next) {

    var options = {
      root: GLOBAL.config.root + '/resources/',
    };

    res.sendFile('resume.xls', options, function(err) {
      if (err) res.set('Content-Type', 'application/vnd.ms-excel').status(err.status).end();
    });
  });

  app.get('/certification', function(req, res, next) {

    var options = {
      root: GLOBAL.config.root + '/resources/',
    };

    res.sendFile('ninsyo2009.pdf', options, function(err) {
      if (err) res.status(err.status).end();
    });
  });
};
