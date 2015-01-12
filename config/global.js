var fs = require('fs'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {

    test: {
        root: rootPath,
        app: {
            name: 'EBusiness - HomePage [TEST]',
            env: 'test'
        }
    },

    development: {
        root: rootPath,
        app: {
            name: 'EBusiness - HomePage [DEV]',
            env: 'development'
        }
    },

    production: {
        root: rootPath,
        app: {
            name: 'EBusiness - HomePage',
            env: 'production'
        }
    }
};