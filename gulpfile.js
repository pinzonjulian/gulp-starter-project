var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// var notify = require('gulp-notify');

var runSequence = require('run-sequence');

gulp.task('sass', function (){
  return gulp.src('app/css/main.sass')
  .pipe(sass())
  .pipe(autoprefixer())
  // .pipe(cssnano())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream());
})

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/css/**/*.+(sass|scss)", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
