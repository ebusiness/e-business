// Inquiry Index
// ---------------------------------------------

var moment = require('moment'),
  Inquiry = require('mongoose').model('Inquiry');

module.exports = function(req, res, next) {

  var query = Inquiry.find()
    .select('-logicDelete')
    .where('logicDelete').equals(false)
    .sort('-createDate')
    .limit(10);

  // if request items before some time point
  if (req.query.before)
    query.where('createDate').lt(moment(req.query.before).toDate());

  // check on logic delete flag, return 404 on not found
  query.exec(function(err, inquiries) {
    if (err) next(err);
    else res.json(inquiries);
  });
};