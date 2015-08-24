var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat-css');
var CleanCSS = require('clean-css');
var map = require('vinyl-map');


gulp.task('sass', function () {

  var minify = map(function (buff, filename) {
    return new CleanCSS({
    }).minify(buff.toString()).styles;
  });

  return gulp.src('./content/themes/pucara/lib/stylesheets/components.sass')
    .pipe(sass({optionStyle: "compressed"}).on('error', sass.logError))
    .pipe(concat('components.css'))
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(minify)
    .pipe(gulp.dest('./content/themes/pucara/assets/css/'));
});

gulp.task('run:environment', function () {
  gulp.watch('./content/themes/pucara/lib/stylesheets/**/**/**/*.sass', ['sass']);
});
