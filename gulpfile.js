/*require*/
const gulp = require('gulp');
// const babel = require('gulp-babel');
const sass = require('gulp-sass'); 

/*gulp-sass*/
gulp.task('sass',()=>{
    gulp.src('source_src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('source/css'));
});

gulp.task('default',['sass']);
