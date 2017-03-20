/*require*/
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// const babel = require('gulp-babel');
const sass = require('gulp-sass'); 

const reload = browserSync.reload;
// const workFolder = 'hexo-theme-zhihu';
const files = [
    `*.html`,
    `source_src/scss/*.scss`,
    `srsource_srcc/js/*.js`
];

/*browserSync*/
gulp.task('bs',()=>{
    browserSync.init({
        files,
        server:{
            baseDir:`./`
        },
        /*open browser*/
        open:false,
        browser:'google chrome canary'
    });
    gulp.watch('source_src/scss/*.scss',['sass'])
    gulp.watch('*.html').on('change',reload);
});

/*gulp-sass*/
gulp.task('sass',()=>{
    gulp.src('source_src/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('source/css'))
        .pipe(reload({stream:true}));   //css注入
});

gulp.task('default',['bs']);