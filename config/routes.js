var fs = require('fs'),
  path = require('path'),
  User = require('mongoose').model('User');

module.exports = function(app, config) {

  // prepare controller
  var controller = {},
    pattern = /(.*)?\.js/,
    controller_path = path.join(config.root + '/app/controllers');

  // open the controller path, loop through the contents
  fs.readdirSync(controller_path).forEach(function(dir) {

    // get stats object of a dir/file
    var stats = fs.statSync(controller_path + '/' + dir);

    // if encounter a dir
    if (stats.isDirectory()) {

      // create controller sub categroy
      controller[dir] = {};

      // then loop through the dir
      fs.readdirSync(controller_path + '/' + dir).forEach(function(file) {

        // if encounter a .js file
        if (~file.indexOf('.js') && file) {

          // load this file as request handler
          var match = pattern.exec(file);
          controller[dir][match[1]] = require(controller_path + '/' + dir + '/' + file);
        }
      });
    }
  });

  // Retrieve password request
  app.post('/retrieve', controller.resetpassword.create);
  // Retrieve password page
  app.get('/retrieve/:id', controller.resetpassword.show);
  // Reset password
  app.put('/retrieve/:id', controller.resetpassword.update);

  // User Login
  app.post('/login', controller.user.login);
  // User Logout
  app.get('/logout', controller.user.logout);
  // User Information
  app.get('/session', checkLoginStatus, function(req, res, next) {
    res.json(req.user);
  });

  //////////////////////////////////////////////////
  /// Console route
  //////////////////////////////////////////////////
  app.get('/admin', checkLoginStatus, function(req, res, next) {
    res.render('admin/index');
  });

  app.get('/pictures', checkLoginStatus, controller.picture.index);
  app.post('/pictures', checkLoginStatus, controller.picture.create);

  //////////////////////////////////////////////////
  /// Static route
  //////////////////////////////////////////////////
  app.get('/', function(req, res, next) {
    res.render('page/home', {
      locale: req.getLocale(),
      path: 'home'
    });
  });

  app.get('/:lang?/home', function(req, res, next) {
    res.render('page/home', {
      locale: req.getLocale(),
      path: 'home'
    });
  });

  app.get('/:lang?/about-us', function(req, res, next) {
    res.render('page/about-us', {
      locale: req.getLocale(),
      path: 'about-us'
    });
  });

  app.get('/:lang?/services', function(req, res, next) {
    res.render('page/services', {
      locale: req.getLocale(),
      path: 'services'
    });
  });

  app.get('/:lang?/products', function(req, res, next) {
    res.render('page/products', {
      locale: req.getLocale(),
      path: 'products'
    });
  });

  app.get('/:lang?/recruitment', function(req, res, next) {
    res.render('page/recruitment', {
      locale: req.getLocale(),
      path: 'recruitment'
    });
  });

  app.get('/:lang?/contact', function(req, res, next) {
    res.render('page/contact', {
      locale: req.getLocale(),
      path: 'contact'
    });
  });

  app.get('/:lang?/login', function(req, res, next) {
    res.render('page/login', {
      locale: req.getLocale(),
      path: 'login'
    });
  });

  app.get('/:lang?/privacy', function(req, res, next) {
    res.render('page/privacy', {
      locale: req.getLocale(),
      path: 'privacy'
    });
  });

  app.get('/:lang?/terms-of-service', function(req, res, next) {
    res.render('page/terms-of-service', {
      locale: req.getLocale(),
      path: 'terms-of-service'
    });
  });

  app.get('/:lang?/margin-rate', function(req, res, next) {
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

checkLoginStatus = function(req, res, next) {

  if (!req.session.userId) {
    if (req.xhr) {
      res.status(401).json({
        title: "セッションの有効期限が切りました。",
        msg: "セキュリティのため、しばらく操作しない場合はサーバーからセッションを切断することがあります。お手数ですが、もう一度ログインしてください。"
      });
    } else {
      res.redirect('/');
    }
  } else {

    // find user by his id
    User.findById(req.session.userId, function(err, user) {

      if (!err && user) {
        // associate user with request
        req.user = user;
        next();
      } else {
        next(new Error('Could not restore User from Session.'));
      }
    });
  }
};