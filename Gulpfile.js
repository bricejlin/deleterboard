var browserify = require('gulp-browserify');
var sass       = require('gulp-sass');

var gulp       = require('gulp');

gulp.task('scripts', function () {
  gulp.src(['app/node_modules/main.js'])
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('./app/node_modules/public/'));
});

gulp.task('sass', function () {
  gulp.src('app/node_modules/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/node_modules/public/css'));
});

gulp.task('default', ['scripts']);