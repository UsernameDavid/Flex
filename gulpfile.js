var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watch("*.html").on("change", reload);
});