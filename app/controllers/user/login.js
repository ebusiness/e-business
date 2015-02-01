// User login
var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(req, res, next) {

    // do nothing if login info are not enough
    if (!req.body.email || !req.body.password)
        res.status(400).end();

    // look up user info
    User.findOne(req.body, function(err, user) {

        // pass if error happend
        if (err) next(err);
        // if the account not found, return the fail message
        else if (!user) res.status(401).end();
        // if account could be found
        else {

            // put user's id into session
            req.session.userId = user.id;

            // send success signal
            res.json({});
        }
    });
};