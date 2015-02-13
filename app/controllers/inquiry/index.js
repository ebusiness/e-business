// Inquiry Index
// ---------------------------------------------

var Inquiry = require('mongoose').model('Inquiry');

module.exports = function(req, res, next) {

  // check on logic delete flag, return 404 on not found
  Inquiry.find()
    .select('-logicDelete')
    .where('logicDelete').equals(false)
    .exec(function(err, inquiries) {
      if (err) next(err);
      else res.json(inquiries);
    });
};