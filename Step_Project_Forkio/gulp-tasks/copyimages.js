const { dest, src } = require("gulp");
const gulp = require("gulp");
const { browserReload } = require("./watcher");

function copyImages() {
  return src("./src/img/*").pipe(gulp.dest("./dist/images"));
  // .on("end", browserReload);
}

exports.copyImages = copyImages;
