var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var notify     = require('gulp-notify');
var browser    = require('browser-sync');
var less       = require('gulp-less');
var path       = require('path');
var sourcemaps = require('gulp-sourcemaps');

var stylePath = './less/';


gulp.task('server', function() {
    browser({
        server: {
            baseDir: './_preview/'
        }
    });
});

gulp.task('less', function () {
  return gulp.src(stylePath + '*.less')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
	.pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('_preview/'))
	.pipe(browser.reload({stream:true}));
});

gulp.task('default',['server'], function() {
	gulp.watch(stylePath + '*.less', ['less']);
});
