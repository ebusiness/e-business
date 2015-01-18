var fs = require('fs'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/..');

module.exports = {

  test: {
    root: rootPath,
    app: {
      name: 'EBusiness - HomePage [TEST]',
      env: 'test'
    },
    // ssl: {
    //   key: fs.readFileSync(rootPath + '/resources/ssl/test/e-business.pem'),
    //   cert: fs.readFileSync(rootPath + '/resources/ssl/test/e-business.crt')
    // },
    mongodb: {
      host: 'mongodb://localhost/e-business_test',
    },
    mail: {
      service: "Gmail",
      auth: {
        user: "joe.19840729.china@gmail.com",
        pass: "19840729"
      }
    }
  },

  development: {
    root: rootPath,
    app: {
      name: 'EBusiness - HomePage [DEV]',
      env: 'development'
    },
    // ssl: {
    //   key: fs.readFileSync(rootPath + '/resources/ssl/development/e-business.pem'),
    //   cert: fs.readFileSync(rootPath + '/resources/ssl/development/e-business.crt')
    // },
    mongodb: {
      host: 'mongodb://localhost/e-business_dev'
    },
    mail: {
      service: "Gmail",
      auth: {
        user: "joe.19840729.china@gmail.com",
        pass: "19840729"
      }
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'EBusiness - HomePage',
      env: 'production'
    },
    // ssl: {
    //   key: fs.readFileSync(rootPath + '/resources/ssl/development/e-business.pem'),
    //   cert: fs.readFileSync(rootPath + '/resources/ssl/development/e-business.crt')
    // },
    mongodb: {
      host: 'mongodb://localhost/e-business'
    },
    mail: {
      port: 587,
      auth: {
        user: "administrator@e-business.jp",
        pass: "ZSkikuD2O5"
      }
    }
  }
};