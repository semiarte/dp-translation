const { src, dest, watch, series, parallel } = require('gulp');
// dependencies
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');

const files = {
    cssPath: 'scss/*.css',
    jsPath: ['node_modules/jquery/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'js.js'],
}

// Tasks
function cssTask() {
    return src(files.cssPath)
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('css'));
}

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
        [files.cssPath, 'node_modules/jquery/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'js.js'],
        parallel(cssTask, jsTask)    
    );
}

// default task
exports.default = series(
    parallel(cssTask, jsTask),
    cacheBustTask,
    watchTask
);