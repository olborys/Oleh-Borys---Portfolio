const del = require("del");

function cleaner() {
  return del("./dist/");
}

exports.cleaner = cleaner;
