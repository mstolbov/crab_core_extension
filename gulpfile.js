const gulp = require("gulp");
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const minify = require('gulp-minify');

const destination = "./"

gulp.task("main", () => {
  return gulp.src("./src/main.js")
  .pipe(browserify({ transform: ['babelify'] }))
  .pipe(minify({noSource: true}))
  .pipe(gulp.dest(destination));
});

gulp.task("content", () => {
  return gulp.src("./src/content.js")
  .pipe(browserify({ transform: ['babelify'] }))
  .pipe(minify({noSource: true}))
  .pipe(gulp.dest(destination));
});

gulp.task("default", ["main", "content"])
