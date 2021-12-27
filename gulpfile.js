const { task, src, dest, watch, series } = require("gulp");
const babel = require("gulp-babel");
const jshint = require("gulp-jshint");


task("js",()=>{
    return src("src/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
    .pipe(babel())
    .pipe(dest("dist"));
});
task("moveHTML",()=>{
    return src("src/*.html").pipe(dest("dist"));
});
task("watch",()=>{
    watch("src/*.js",{persistent: false},series("js"));
});
//jshint are using for testing purpose is it working or not;
task("lint",()=>{
    return src("src/*.js").pipe(jshint()).pipe(jshint.reporter());
})
task("default",series('moveHTML','js'));
//you don't have to add the watch task inside the series() API and also you could delete the persistent object property.


