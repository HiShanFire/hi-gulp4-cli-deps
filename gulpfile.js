var gulp = require('gulp'),
    task = require('hi-gulp4-cfg'),
    dev = task.dev(),
    prod = task.prod()
;

gulp.task('default', dev);
gulp.task('dist', prod)
