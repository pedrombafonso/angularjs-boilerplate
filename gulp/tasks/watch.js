var gulp = require('gulp');

// Plugins
var concat = require('gulp-concat');

var watch = {
  js: ['app/js/**/*.js'],
  bower: ['app/components/**/*.*'],
  templates: ['app/html/**/*.html'],
  index: ['app/index.html']
};

gulp.task('watch', ['js', 'bower', 'templates', 'index'], function () {
  gulp.watch(watch.js, ['js']);

  gulp.watch(watch.bower, ['bower']);

  gulp.watch(watch.templates, ['templates']);

  gulp.watch(watch.index, ['index']);
});
