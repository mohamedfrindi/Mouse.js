const { dest } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const prefix = require('gulp-autoprefixer');
const zip = require('gulp-zip');



// demo tasks -------------------------
// html
gulp.task('html' , function () {
    return gulp.src('src/*.html')
            .pipe(concat('index.html'))
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(dest('.'))
            .pipe(connect.reload());
})
// css
gulp.task('css' , function () {
    return gulp.src('src/css/style.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(prefix('last 2 version'))
            .pipe(dest('demo/'))
            .pipe(connect.reload());
})
// js
gulp.task('js' , function () {
    return gulp.src('src/js/mouse-template.js')
            .pipe(uglify())
            .pipe(dest('demo/'))
            .pipe(connect.reload());
})
// ------x-------------x----------------


// dist tasks -------------------------------------
// mouse js file
gulp.task('mouse-js' , function () {
    return gulp.src('src/js/mouse.js')
            .pipe(concat('mouse.js'))
            .pipe(dest('dist/js/'))
            .pipe(connect.reload());
})
// mouse min js file 
gulp.task('mouse-min-js' , function () {
    return gulp.src('src/js/mouse.js')
            .pipe(concat('mouse-min.js'))
            .pipe(uglify())
            .pipe(dest('dist/js/'))
            .pipe(connect.reload());
})
// mouse css file 
gulp.task('mouse-css' , function () {
    return gulp.src('src/css/mouse.scss')
            .pipe(sass())
            .pipe(prefix('last 2 version'))
            .pipe(concat('mouse.css'))
            .pipe(dest('dist/css/'))
            .pipe(connect.reload());
})
// mouse css file 
gulp.task('mouse-min-css' , function () {
    return gulp.src('src/css/mouse.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(prefix('last 2 version'))
            .pipe(concat('mouse-min.css'))
            .pipe(dest('dist/css/'))
            .pipe(connect.reload());
})
// ----------x-----------------x---------------------



// zip file task --------------------------------
gulp.task('zip' , function () {
    return gulp.src('dist/**/*.*')
            .pipe(zip('mouse-js.zip'))
            .pipe(dest('.'))
})
// ----------x------------x----------------------




// watch ------------------------------------------
gulp.task('watch' , function () {

    // server
    connect.server({
        root: '.',
        livereload: true
    });
    
    gulp.watch('src/**' , gulp.series(['html','css','js','mouse-js','mouse-min-js','mouse-css','mouse-min-css','zip']))
})
// ---------x--------------x-----------------------