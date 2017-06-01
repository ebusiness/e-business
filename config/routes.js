var fs = require('fs'),
  path = require('path');

var isSpider = function(req) {
   ua = req.headers["user-agent"].toLowerCase()
   if (ua.indexOf("bot") != -1) {
     return true
   }
   if (ua.indexOf("spider") != -1) {
     return true
   }
   if (ua.indexOf("yahoo") != -1) {
     return true
   }
   return false
}
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

  app.get('/recruitment/future', function(req, res, next) {
    if (req.query.ajax || isSpider(req)){
      res.render('page/recruitment/future');
    } else {
      res.render('page/recruitment/index');
    }
  });

  app.get('/recruitment/grade', function(req, res, next) {
    if (req.query.ajax || isSpider(req)){
      res.render('page/recruitment/grade');
    } else {
      res.render('page/recruitment/index');
    }
  });

  app.get('/recruitment/benefit', function(req, res, next) {
    if (req.query.ajax || isSpider(req)){
      res.render('page/recruitment/benefit');
    } else {
      res.render('page/recruitment/index');
    }
  });

  app.get('/recruitment/graduates', function(req, res, next) {
    res.render('page/recruitment/graduates');
  });

  app.get('/recruitment/office', function(req, res, next) {
    if (req.query.ajax || isSpider(req)){
      res.render('page/recruitment/office');
      return
    }
    res.render('page/recruitment/index');
  });

  app.get('/recruitment/employee', function(req, res, next) {
    if (req.query.ajax || isSpider(req)){
      res.render('page/recruitment/employee');
      return
    }
    res.render('page/recruitment/index');
  });

  app.get('/recruitment/faq', function(req, res, next) {
    if (req.query.ajax || isSpider(req)){
      res.render('page/recruitment/faq');
      return
    }
    res.render('page/recruitment/index');
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
