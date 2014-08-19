var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var path = require('path');

var sassFiles = {
  src: path.resolve('app', 'sass', 'main.scss'),
  dst: path.resolve('dist', 'css')
};

console.log(sassFiles.src);

gulp.task('sass', ['clean'], function () {
  gulp.src(sassFiles.src)
    .pipe(sass())
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest(sassFiles.dst));
});
