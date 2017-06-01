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
    res.render('page/recruitment/index');
  });

  app.get('/recruitment/a', function(req, res, next) {
    res.render('page/recruitment/a');
  });

  app.get('/recruitment/graduates', function(req, res, next) {
    res.render('page/recruitment/graduates');
  });

  app.get('/recruitment/career', function(req, res, next) {
    res.render('page/recruitment/career');
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

    res.setHeader('Content-Disposition', 'attachment; filename=resume.xls');
    res.setHeader('Content-Type', 'application/vnd.ms-excel');
    var file = global.config.root + '/resources/resume.xls';
    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
  });

  app.get('/certification', function(req, res, next) {

    var options = {
      root: global.config.root + '/resources/',
    };

    res.sendFile('ninsyo2009.pdf', options, function(err) {
      if (err) res.status(err.status).end();
    });
  });

  app.get('/openRequest', function(req, res, next) {

    var options = {
      root: global.config.root + '/resources/',
    };

    res.sendFile('openRequest.pdf', options, function(err) {
      if (err) res.status(err.status).end();
    });
  });
};
