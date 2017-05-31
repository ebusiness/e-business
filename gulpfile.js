var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del');

gulp.task('img', function() {
  gulp.src('public/img/**/*.*')
    .pipe(gulp.dest('public-build/img/'));
});

gulp.task('bootstrap', function() {
  gulp.src('public/components/bootstrap/**/*.*')
    .pipe(gulp.dest('public-build/components/bootstrap/'));
});

gulp.task('font-awesome', function() {
  gulp.src('public/components/font-awesome/**/*.*')
    .pipe(gulp.dest('public-build/components/font-awesome/'));
});

gulp.task('line-icon', function() {
  gulp.src('public/components/simple-line-icons/**/*.*')
    .pipe(gulp.dest('public-build/components/simple-line-icons/'));
});

gulp.task('slider', function() {
  gulp.src('public/components/revolution-slider/**/*.*')
    .pipe(gulp.dest('public-build/components/revolution-slider/'));
});

gulp.task('css-home', function() {
  gulp.src('public/css/home.css')
    .pipe(minifycss())
    .pipe(gulp.dest('public-build/css/'))
    .pipe(notify({
      message: 'Css-home task complete'
    }));
});

gulp.task('css-about', function() {
  gulp.src('public/css/about-us.css')
    .pipe(minifycss())
    .pipe(gulp.dest('public-build/css/'))
    .pipe(notify({
      message: 'Css-about task complete'
    }));
});

gulp.task('css-services', function() {
  gulp.src('public/css/services.css')
    .pipe(minifycss())
    .pipe(gulp.dest('public-build/css/'))
    .pipe(notify({
      message: 'Css-services task complete'
    }));
});

gulp.task('css-contact', function() {
  gulp.src('public/css/contact.css')
    .pipe(minifycss())
    .pipe(gulp.dest('public-build/css/'))
    .pipe(notify({
      message: 'Css-contact task complete'
    }));
});

gulp.task('css-common', function() {
  gulp.src('public/css/common.css')
    .pipe(minifycss())
    .pipe(gulp.dest('public-build/css/'))
    .pipe(notify({
      message: 'Css-common task complete'
    }));
});

gulp.task('css-recruitment', function() {
  gulp.src('public/css/recruitment.css')
    .pipe(minifycss())
    .pipe(gulp.dest('public-build/css/'))
    .pipe(notify({
      message: 'Css-recruitment task complete'
    }));
});

gulp.task('js-home', function() {
  return gulp.src([
      "public/components/jquery/dist/jquery.js",
      "public/components/bootstrap/dist/js/bootstrap.js",
      "public/components/fastclick/lib/fastclick.js",
      "public/components/jpreloader/js/jpreloader.min.js",
      "public/components/back-to-top/index.js",
      "public/components/gsap/src/minified/TweenMax.min.js",
      "public/components/waypoints/waypoints.js",
      "public/components/jquery-touchswipe/jquery.touchSwipe.js",
      "public/components/revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min.js",
      "public/js/home.js"
    ])
    .pipe(concat('home.js'))
    // .pipe(gulp.dest('public-build/js/'))
    // .pipe(rename({
    //   suffix: '.min'
    // }))
    .pipe(uglify())
    .pipe(gulp.dest('public-build/js/'))
    .pipe(notify({
      message: 'Js-home task complete'
    }));
});

gulp.task('js-about', function() {
  return gulp.src([
      "public/components/jquery/dist/jquery.js",
      "public/components/bootstrap/dist/js/bootstrap.js",
      "public/components/fastclick/lib/fastclick.js",
      "public/components/back-to-top/index.js",
      "public/components/gsap/src/minified/TweenMax.min.js",
      "public/components/waypoints/waypoints.min.js",
      "public/components/jpreloader/js/jpreloader.min.js",
      "public/components/modernizr/modernizr.js",
      "public/components/flot/jquery.flot.js",
      "public/components/flot/jquery.flot.resize.js",
      "public/components/counter-up/jquery.counterup.min.js",
      "public/js/about-us.js"
    ])
    .pipe(concat('about-us.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public-build/js/'))
    .pipe(notify({
      message: 'Js-about task complete'
    }));
});

gulp.task('js-recruitment', function() {
  return gulp.src([
      "public/components/jquery/dist/jquery.js",
      "public/components/bootstrap/dist/js/bootstrap.js",
      "public/components/fastclick/lib/fastclick.js",
      "public/components/back-to-top/index.js",
      "public/components/gsap/src/minified/TweenMax.min.js",
      "public/components/waypoints/waypoints.min.js",
      "public/components/jpreloader/js/jpreloader.min.js",
      "public/js/recruitment.js"
    ])
    .pipe(concat('recruitment.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public-build/js/'))
    .pipe(notify({
      message: 'Js-recruitment task complete'
    }));
});

gulp.task('js-contact', function() {
  return gulp.src([
      "public/components/jquery/dist/jquery.js",
      "public/components/bootstrap/dist/js/bootstrap.js",
      "public/components/fastclick/lib/fastclick.js",
      "public/components/jpreloader/js/jpreloader.min.js",
      "public/components/back-to-top/index.js",
      "public/components/gsap/src/minified/TweenMax.min.js",
      "public/components/gmaps/gmaps.js",
      "public/js/contact.js"
    ])
    .pipe(concat('contact.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public-build/js/'))
    .pipe(notify({
      message: 'Js-contact task complete'
    }));
});

gulp.task('js-common', function() {
  return gulp.src([
      "public/components/jquery/dist/jquery.js",
      "public/components/bootstrap/dist/js/bootstrap.js",
      "public/components/fastclick/lib/fastclick.js",
      "public/components/back-to-top/index.js",
      "public/components/gsap/src/minified/TweenMax.min.js",
      "public/components/jpreloader/js/jpreloader.min.js",
      "public/js/common.js"
    ])
    .pipe(concat('common.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public-build/js/'))
    .pipe(notify({
      message: 'Js-common task complete'
    }));
});

gulp.task('default', function() {
  gulp.start('img', 'bootstrap', 'font-awesome', 'line-icon', 'slider', 'css-home', 'css-about', 'css-services', 'css-contact', 'css-common', 'js-home', 'js-about', 'js-recruitment', 'js-contact', 'js-common');
});
