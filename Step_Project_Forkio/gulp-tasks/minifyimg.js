const { dest, src } = require("gulp");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const { browserReload } = require("./watcher");

function imgMin() {
  return src("./src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
    .on("end", browserReload);
}

exports.imgMin = imgMin;
