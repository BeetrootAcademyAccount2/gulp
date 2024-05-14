const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const jshint = require("gulp-jshint");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-minify-css");

// gulp.task("message", (done) => {
//   console.log("Working");
//   return done();
// });

// gulp.task("default", async () => {
//   console.log("This is the default one");
// });

gulp.task("message", async () => {
  console.log("Working");
});

gulp.task("jshint", async () => {
  gulp.src("src/script.js").pipe(jshint()).pipe(jshint.reporter("default"));
});

gulp.task("imagemin", async () => {
  return gulp
    .src("src/images/*.{jpg,png,svg}")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("sass", async () =>
  gulp.src("src/styles/*.scss").pipe(sass()).pipe(gulp.dest("dist/styles"))
);

gulp.task("minifyCss", async () =>
  gulp.src("dist/styles/*.css").pipe(minifyCss()).pipe(gulp.dest("dist/css"))
);

// gulp.task("concat", async () =>
//   gulp.src("src/*.js").pipe(concat("main.js")).pipe(gulp.dest("dist/js"))
// );

gulp.task("scripts", async () => {
  gulp
    .src("src/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("message", "scripts"));
