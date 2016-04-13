var $path = require('./config').path,
    gulp = require('gulp'),
    // newer = require('gulp-newer'),
    // sourcemaps = require('gulp-sourcemaps'),
    cached = require('gulp-cached'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant')
;

function dev_img(){
    return gulp.src($path.dev+'/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}')
        .pipe(cached(dev_img))
        .pipe(gulp.dest($path.dev_server))
}

function prod_img(){
    return gulp.src($path.pre+'/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}')
        .pipe(cached(prod_img))
        .pipe(imagemin({
            progressive: false,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest($path.prod))
}

module.exports = {
    dev: dev_img,
    prod: prod_img
};