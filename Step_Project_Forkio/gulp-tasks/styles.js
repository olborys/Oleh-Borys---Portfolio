const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const { browserSync } = require("./serve.js");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const ggcmq = require("gulp-group-css-media-queries");

function styles() {
  return src("./src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(ggcmq())
    .pipe(postcss([autoprefixer({ cascade: false }), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(concat("styles.min.css"))
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
}

exports.styles = styles;
