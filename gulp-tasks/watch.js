const gulp = require("gulp");
const build = require("./build");

// Watch for file changes and trigger appropriate build tasks
function watchFiles() {
  gulp.watch("src/components/**/*.ts", gulp.series(build.buildScripts));
  gulp.watch("src/components/**/*.scss", gulp.series(build.buildStyles));
}

// Export watch task
module.exports = {
  watchFiles
};
