// Picture Index
// ---------------------------------------------

var Picture = require('mongoose').model('Picture');

module.exports = function(req, res, next) {

  // check on logic delete flag, return 404 on not found
  Picture.find()
    .select('-logicDelete')
    .where('logicDelete').equals(false)
    .populate('owner', 'firstName lastName')
    .exec(function(err, pictures) {
      if (err) next(err);
      else res.json(pictures);
    });
};