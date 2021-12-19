const { task, src, dest, watch, series } = require("gulp");
const babel = require("gulp-babel");

task("js",()=>{
    return src("src/*.js").pipe(babel()).pipe(dest("dist/js"));
})
task("moveHTML",()=>{
    return src("src/*.html").pipe(dest("dist"));
});
task("watch",()=>{
    watch("src/*.js",series("js"));
});

task("default",series('moveHTML','js'));
