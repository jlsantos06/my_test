const gulp = require("gulp");
const build = require("./gulp-tasks/build");
const watch = require("./gulp-tasks/watch");

// Register tasks
gulp.task("build", build.build);
gulp.task("watch", watch.watchFiles);