const { dest, src } = require("gulp");
const { browserSync } = require("./serve.js");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const uglify = require("gulp-uglify");
const minifier = require("gulp-js-minify");

function minifyJs() {
  return src("./src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("scripts.min.js"))
    .pipe(terser())
    .pipe(minifier())
    .pipe(sourcemaps.write())
    .pipe(dest("./dist/js"))
    .pipe(browserSync.stream());
}

exports.minifyJs = minifyJs;
