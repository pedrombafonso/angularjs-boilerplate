var gulp = require('gulp');

// Plugins
var imagemin = require('gulp-imagemin');

// Utils
var path = require('path');

var images = {
  src: path.resolve('app', 'img'),
  dst: path.resolve('dist', 'img')
};

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(images.src)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(images.dst));
});
