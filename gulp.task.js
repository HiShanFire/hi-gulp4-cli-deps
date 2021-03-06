var gulp = require('gulp'),
    $path = require('./$gulp/config').path
;

/* Server */
var $server = require('./$gulp/server');
gulp.task('dev_server', $server.dev);
gulp.task('prod_server', $server.prod);


/* Clean */
var $clean = require('./$gulp/clean');
gulp.task('dev_clean', $clean.dev);
gulp.task('prod_clean', $clean.prod);


/* HTML */
var $html = require('./$gulp/html');
gulp.task('dev_html', $html.dev);
gulp.task('prod_html', $html.prod);


/* Images */
var $images = require('./$gulp/images');
gulp.task('dev_img', $images.dev);
gulp.task('prod_img', $images.prod);


/* CSS */
var $css = require('./$gulp/css'),
    parser_dev_css = $css.dev($server.dev_reload)
;
gulp.task('dev_css', parser_dev_css);
gulp.task('prod_css', $css.prod);


/* Scripts */
var $js = require('./$gulp/scripts');
gulp.task('dev_js', $js.dev)
gulp.task('prod_js', $js.prod)


/* Watch */
var initWatcher = (arr, fn) => {
    var temp = gulp.watch(arr, fn);
    temp.on('change', function(file){
        console.log(file + ' changed...');
    });
    return temp;
};
gulp.task('dev_watcher', function(){
    initWatcher([$path.dev +'/**/*.html'], gulp.series('dev_html', $server.dev_reload))
    initWatcher([$path.dev +'/**/*.{sass,scss,css}'], gulp.series('dev_css'));
    initWatcher([$path.dev +'/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}'], gulp.series('dev_img'));
    initWatcher([$path.dev +'/**/*.js'], gulp.series('dev_js'));
});


// gulp.task('default', gulp.series('dev_clean', gulp.parallel('dev_html', 'dev_css', 'dev_img', 'dev_js'), gulp.parallel('dev_server', 'dev_watcher') ) );

// gulp.task('dist',  );


module['exports'] = {
    dev : function(){
        return gulp.series('dev_clean', gulp.parallel('dev_html', 'dev_css', 'dev_img', 'dev_js'), gulp.parallel('dev_server', 'dev_watcher') );
    },

    prod : function(){
        return gulp.series('prod_clean', gulp.parallel('prod_html', 'prod_css', 'prod_img', 'prod_js'), gulp.parallel('prod_server') )
    }

};