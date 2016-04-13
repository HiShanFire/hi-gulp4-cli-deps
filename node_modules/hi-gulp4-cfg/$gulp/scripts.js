var $path = require('./config').path,
    gulp = require('gulp'),
    uglify = require('gulp-uglify')
;

/* 前缀配置 */
var autoprefixer_config = ['last 2 versions'];

module.exports = {
    dev: () => {
        return gulp.src($path.dev +'/**/*.js')
            .pipe(gulp.dest($path.dev_server))
    },

    prod: () => {
        return gulp.src($path.pre +'/**/*.js')
            .pipe(uglify())
            .pipe(gulp.dest($path.prod))
    }
};