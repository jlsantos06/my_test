const gulp = require("gulp");
const ts = require("gulp-typescript");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const cleanCSS = require("gulp-clean-css");
const fs = require("fs/promises");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist");
const tsProject = ts.createProject("tsconfig.build.json");

// Clean the dist folder
async function clean() {
  return fs.rm(distPath, { recursive: true, force: true }).catch(() => {});
}

// Compile TypeScript
function buildScripts() {
  return tsProject.src()
    .pipe(tsProject())
    .on("error", (err) => {
      console.error("TypeScript Error:", err);
    })
    .pipe(concat("web-components.js"))
    .pipe(terser())
    .pipe(gulp.dest("dist"));
}

// Compile Sass
function buildStyles() {
  return gulp
    .src("src/components/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("web-components.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"));
}

// Define build task: Clean first, then compile scripts and styles
const build = gulp.series(clean, buildScripts, buildStyles);

// Export tasks
module.exports = {
  clean,
  buildScripts,
  buildStyles,
  build
};
