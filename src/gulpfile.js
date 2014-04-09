var gulp = require('gulp');

var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  coffee: 'upyachka/**/*.coffee',
  dist: '../'
};

gulp.task('compile', function () {
  gulp.src(paths.coffee)
      .pipe(coffee())
      .pipe(concat('upyachka.js'))
      .pipe(gulp.dest(paths.dist));

  gulp.src(paths.coffee)
      .pipe(coffee())
      .pipe(concat('upyachka.min.js'))
      .pipe(uglify(/*{outSourceMap: true}*/))
      .pipe(gulp.dest(paths.dist));
});

gulp.task('_watch', function () {
  gulp.watch(paths.coffee, ['compile']);
});

gulp.task('watch', ['compile', '_watch']);
gulp.task('default', ['compile']);