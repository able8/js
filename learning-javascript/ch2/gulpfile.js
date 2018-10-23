const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint')
// Gulp dependencies go here
gulp.task('default', function () {
    // gulp tasks go here
    // Node source
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    gulp.src("es6/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

        // browser soure
        gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});