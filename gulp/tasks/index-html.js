var gulp = require('gulp');

// Utils
var path = require('path');

var index = {
  src: [path.resolve('app', 'templates', 'index.html')],
  dst: path.resolve('dist')
};

gulp.task('index', [], function () {
  return gulp.src(index.src)
    .pipe(gulp.dest(index.dst));
});
