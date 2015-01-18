// Upload Photo
var path = require('path'),
    formidable = require('formidable');

module.exports = function(req, res, next) {

    var uploadForm = new formidable.IncomingForm({
        uploadDir: path.join(config.root + '/public/upload')
    });

    uploadForm.parse(req, function(err, fields, files) {

        // handle photo file
        if (files.photo) {

            var photoType = files.photo.type;
            var photoPath = files.photo.path;

            if (['image/jpeg', 'image/gif', 'image/png'].indexOf(photoType) === -1) {
                res.status(415).send("Only jpeg, gif or png file are valide");
                return;
            }

            var photoName = /.*[\/|\\](.*)$/.exec(photoPath)[1];

            req.session.tempPhotoName = photoName;
            req.session.tempPhotoType = photoType;

            res.json({fileName: './upload/' + photoName});

        } else res.json(400, {});
        
    });
};