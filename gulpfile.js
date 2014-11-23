
var gulp = require('gulp');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uncss = require('gulp-uncss');
var glob = require('glob');

gulp.task('css', function() {
  gulp.src('./css/base.css')
    .pipe(basswork())
    .pipe(uncss({
      html: glob.sync('./views/**/*.handlebars'),
      ignore: require('./css/uncss-ignore')
    }))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['css'], function() {
  gulp.watch(['./css/**/*'], ['css']);
});

