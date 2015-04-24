
var browserify = require('gulp-browserify');
var jshint     = require('gulp-jshint');
var gulp       = require('gulp');

gulp.task('scripts', function () {
  gulp.src(['app/node_modules/main.js'])
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('./app/node_modules/public/'));
});

gulp.task('jshint', function () {
  return gulp.src('app/**/*.js')
    .pipe(jshint());
});

gulp.task('default', ['scripts']);

gulp.task('dev', ['jshint']);