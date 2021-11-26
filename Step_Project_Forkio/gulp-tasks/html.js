const { dest, src } = require("gulp");
const gulp = require("gulp");
const { browserSync } = require("./serve.js");
const fileInclude = require("gulp-file-include");

function html() {
  return src("./src/html/index.html")
    .pipe(fileInclude())
    .pipe(dest("./"))
    .pipe(browserSync.stream());
}

exports.html = html;
