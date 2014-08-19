var gulp = require('gulp');

var gulp = require('gulp');
var bower = require('gulp-bower');

var path = require('path');

gulp.task('bower', ['clean'], function() {
  var dst = path.resolve('dist', 'lib');
  return bower()
    .pipe(gulp.dest(dst));
});
