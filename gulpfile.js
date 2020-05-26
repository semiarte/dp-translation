const { src, dest, watch, series, parallel } = require('gulp');
// dependencies
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');

const files = {
    jsPath:'js.js',
}

// Tasks
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./js'));
}

const cbString = new Date().getTime();
function cacheBustTask(){
  return src(['index.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('.'));
}

// watch
function watchTask() {
    watch(
        [files.jsPath],
        parallel(jsTask)    
    );
}

// default task
exports.default = series(
    parallel(jsTask),
    cacheBustTask,
    watchTask
);