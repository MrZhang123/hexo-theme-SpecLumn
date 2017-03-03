/*require*/
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// const babel = require('gulp-babel');
const sass = require('gulp-sass'); 

const reload = browserSync.reload;
// const workFolder = 'hexo-theme-zhihu';
const files = [
    `*.html`,
    `src/scss/*.scss`,
    `src/js/*.js`
];

/*browserSync*/
gulp.task('bs',()=>{
    browserSync.init({
        files,
        server:{
            baseDir:`./`
        }
        /*open browser*/
        // open:'false',
        // browser:'google chrome canary'
    });
    gulp.watch('src/scss/*.scss',['sass'])
    gulp.watch('*.html').on('change',reload);
});

/*gulp-sass*/
gulp.task('sass',()=>{
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream:true}));   //css注入
});

gulp.task('default',['bs']);