var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function(){
    gulp.src('assets/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('watch',function(){
   gulp.watch('/assets/sass/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);