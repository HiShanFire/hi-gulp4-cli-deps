var gulp = require('gulp'),
    task = require('./gulp.task.js'),
    dev = task.dev(),
    prod = task.prod()
;

gulp.task('default', dev);
gulp.task('dist', prod)
