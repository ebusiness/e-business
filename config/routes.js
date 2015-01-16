var fs = require('fs'),
  path = require('path');

module.exports = function(app, config) {

  // Landing
  app.get('/', function(req, res, next) {
    res.render('page/home', {
      locale: req.getLocale(),
      path: 'home'
    });
  });

  app.get('/:lang/home', function(req, res, next) {
    res.render('page/home', {
      locale: req.getLocale(),
      path: 'home'
    });
  });

  app.get('/:lang/about-us', function(req, res, next) {
    res.render('page/about-us', {
      locale: req.getLocale(),
      path: 'about-us'
    });
  });

  app.get('/:lang/services', function(req, res, next) {
    res.render('page/services', {
      locale: req.getLocale(),
      path: 'services'
    });
  });

  app.get('/:lang/products', function(req, res, next) {
    res.render('page/products', {
      locale: req.getLocale(),
      path: 'products'
    });
  });

  app.get('/:lang/recruitment', function(req, res, next) {
    res.render('page/recruitment', {
      locale: req.getLocale(),
      path: 'recruitment'
    });
  });

  app.get('/:lang/contact', function(req, res, next) {
    res.render('page/contact', {
      locale: req.getLocale(),
      path: 'contact'
    });
  });

  app.get('/:lang/login', function(req, res, next) {
    res.render('page/login', {
      locale: req.getLocale(),
      path: 'login'
    });
  });

  app.get('/:lang/privacy', function(req, res, next) {
    res.render('page/privacy', {
      locale: req.getLocale(),
      path: 'privacy'
    });
  });

  app.get('/:lang/terms-of-service', function(req, res, next) {
    res.render('page/terms-of-service', {
      locale: req.getLocale(),
      path: 'terms-of-service'
    });
  });

  app.get('/:lang/margin-rate', function(req, res, next) {
    res.render('page/margin-rate', {
      locale: req.getLocale(),
      path: 'margin-rate'
    });
  });

  app.get('/resume-template', function(req, res, next) {

    var options = {
      root: GLOBAL.config.root + '/resources/',
    };

    res.sendFile('resume.xls', options, function(err) {
      if (err) res.status(err.status).end();
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