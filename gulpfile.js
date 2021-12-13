
const gulp = require("gulp");
const babel = require("gulp-babel");
const { dest } = require("vinyl-fs");
gulp.task("moveHTML", function (){
    return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});
gulp.task("js", ()=>{
    return gulp.src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"))
});
gulp.task("watch",()=>{
    return gulp.watch('src/*.js',gulp.task('js'));
})
gulp.task("default",gulp.series("moveHTML","js","watch"));