var mongoose = require('mongoose'),
  Inquiry = mongoose.model('Inquiry');

module.exports = function(req, res, next) {

  Inquiry.create(req.body, function(err, inquiry) {
    if (err) next(err);
    else res.json(inquiry);
  });

};