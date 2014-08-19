var gulp = require('gulp');

// Plugins
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

// Utils
var handleErrors = require('../utils/error-handling');

var path = require('path');

var js = {
  src: ['./app/js/**/*.js'],
  dst: path.resolve('dist', 'js')
};

gulp.task('js', ['clean'], function () {
  return gulp.src(js.src)
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .on('error', handleErrors)
    .pipe(gulp.dest(js.dst));
});
