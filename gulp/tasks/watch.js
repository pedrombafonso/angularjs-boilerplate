var gulp = require('gulp');

// Plugins
var concat = require('gulp-concat');

var watch = {
  js: ['app/js/**/*.js'],
  templates: ['app/templates/**/*.html'],
  sass: ['app/sass/**/*.scss'],
  index: ['app/templates/index.html'],
  bower: ['app/components/**/*.*']
};

gulp.task('watch', ['js', 'sass', 'templates', 'index', 'bower'], function () {
  gulp.watch(watch.js, ['js']);

  gulp.watch(watch.templates, ['templates']);

  gulp.watch(watch.sass, ['sass']);

  gulp.watch(watch.bower, ['bower']);

  gulp.watch(watch.index, ['index']);
});
