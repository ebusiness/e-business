// Include gulp
let gulp = require('gulp');
let fileinclude = require('gulp-file-include');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let clean = require('gulp-clean');
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;
let htmlmin = require('gulp-htmlmin');

gulp.task('clean', () => {
    return pipeline(
        gulp.src([
            'dist'
        ], {
            read: false
        }),
        clean()
    );
});

let copyAll = (subFolderName) => {
    return pipeline(
        gulp.src([
            './src/' + subFolderName + '/*',
            './src/' + subFolderName + '/**/*',
        ]),
        gulp.dest('dist/' + subFolderName)
    );
}
gulp.task('copy', () => {
    return copyAll("fonts/linea_icon_font") &&
        copyAll("img") &&
        copyAll("rs-plugin")
});

gulp.task('styles', () => {
    return pipeline(
        gulp.src([
            // './src/css/*.css',
            './src/css/style.css',
            // './src/rs-plugin/css/settings.css',
        ]),
        cleanCSS(),
        concat('styles.css'),
        gulp.dest('dist/css')
    );
});

gulp.task('scripts', () => {
    return pipeline(
        gulp.src([
            "./src/js/plugins/jquery.easing.1.3.js",
            "./src/js/plugins/jquery.fitvids.js",
            "./src/js/plugins/jquery.stellar.min.js",
            "./src/js/plugins/isotope.pkgd.min.js",
            "./src/js/plugins/jquery.appear.js",
            "./src/js/plugins/jquery.fs.tipper.min.js",
            "./src/js/plugins/jquery.countTo.js",
            "./src/js/plugins/owl.carousel.min.js",
            "./src/js/plugins/jquery.magnific-popup.min.js",
            "./src/js/plugins/jquery.singlePageNav.min.js",
            "./src/js/plugins/wow.min.js",
            "./src/js/plugins/jquery.validate.min.js",
            "./src/js/contact-form.js",
            // "./src/js/map.js",
            "./src/js/theme.js",
            "./src/gmaps/*.js",
            "./src/js/theme.js"
        ]),
        uglify(),
        concat('javascript.js'),
        gulp.dest('dist/js')
    );
});


gulp.task('fileinclude', () => {
    return pipeline(
        gulp.src(['./src/index.html']),
        fileinclude({
            prefix: '@@',
            basepath: '@file'
        }),
        htmlmin({
            collapseWhitespace: true
        }),
        gulp.dest('./dist/')
    );
});



// Default Task
gulp.task('default', gulp.series('clean', gulp.parallel('scripts', 'styles', 'copy', 'fileinclude')));