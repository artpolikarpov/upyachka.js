var browserify = require('browserify');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');

var paths = {
  upyachka: './upyachka/upyachka.coffee',
  scripts: './upyachka/**/*',
  dist: '../',
  banner: './upyachka/banner.js',
  name: 'upyachka.js',
  tmp: '../tmp/',
  nameMin: 'upyachka.min.js'
};

gulp.task('tmp', function () {
  return browserify({
			entries: [paths.upyachka],
			extensions: ['.coffee']
		})
		.bundle({
        /*debug: true*/
      })
		.on('error', notify.onError({
			message: '<%= error.message %>',
			title: 'JavaScript Error'
		}))
		.pipe(source(paths.name))
		.pipe(gulp.dest(paths.tmp));
});

gulp.task('compile', ['tmp'], function () {
  return [
    gulp.src([paths.banner, paths.tmp + paths.name])
      .pipe(concat(paths.name))
      .pipe(gulp.dest(paths.dist)),

    gulp.src([paths.banner, paths.tmp + paths.name])
        .pipe(concat(paths.nameMin))
        .pipe(uglify({
          preserveComments: 'some',
          outSourceMap: false
        }))
        .pipe(gulp.dest(paths.dist))
  ];
});

gulp.task('_watch', function () {
  gulp.watch(paths.scripts, ['default']);
});

gulp.task('watch', ['defalut', '_watch']);
gulp.task('default', ['tmp', 'compile']);