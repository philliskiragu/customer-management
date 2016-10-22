var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del([
    './.DS_Store',
    './src/.DS_Store',
    './src/**/.DS_Store',
    './gulpfile.js.js/.DS_Store',
    './gulpfile.js.js/**/.DS_Store'
  ]);
});
