var gulp = require('gulp');                         // Gulp instance
var browserSync = require('browser-sync').create(); // BrowserSync instance

/**
 * Gulp Task
 * Called by: gulp 
 * Also runs: browser-sync(task)
 */
gulp.task('default', ['browser-sync'], function() {
    gulp.watch('css/**/*.css').on('change', browserSync.reload);    // Triggers on change to css files and reloads browser
    gulp.watch('*.html').on('change', browserSync.reload);          // Triggers on change to hmtl files and reloads browser
    gulp.watch('js/**/*.js').on('change', browserSync.reload);      // Triggers on change to js files and reloads browser
});

/**
 * Gulp Task
 * Called by: gulp browser-sync
 * 
 */
gulp.task('browser-sync', function() {
    // Initialize browser-sync plugin and pushed current directory to the server
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});