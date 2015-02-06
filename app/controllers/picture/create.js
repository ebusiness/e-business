// Upload Cover
var path = require('path'),
  mongoose = require('mongoose'),
  formidable = require('formidable'),
  Picture = mongoose.model('Picture');;

module.exports = function(req, res, next) {

  var uploadForm = new formidable.IncomingForm({
    uploadDir: path.join(config.root + '/public/upload'),
    keepExtensions: true
  });

  uploadForm.parse(req, function(err, fields, files) {

    console.log(fields);
    console.log(files);

    // handle picture file
    if (files.pic) {

      var picName = files.pic.name;
      var picType = files.pic.type;
      var picFile = /.*[\/|\\](.*)$/.exec(files.pic.path)[1];

      if (['image/jpeg', 'image/gif', 'image/png'].indexOf(picType) === -1) {
        res.status(415).end();
        return;
      }

      Picture.create({
        owner: req.session.userId,
        name: picName,
        type: picType,
        fileName: picFile,
      }, function(err, pictrue) {
        if (err) next(err);
        else res.json(pictrue);
      });

    } else res.status(400).end();

  });
};