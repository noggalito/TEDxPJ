var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
  return gulp.src('./content/themes/pucara/lib/stylesheets/components.sass')
    .pipe(sass({
      style: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat('components.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(autoprefixer({
      cascade: true,
      browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(gulp.dest('./content/themes/pucara/assets/css/'));
});

gulp.task('run:environment', function () {
  gulp.watch('./content/themes/pucara/lib/stylesheets/**/**/**/*.sass', ['sass']);
});
