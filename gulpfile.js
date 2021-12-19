const { task, src, dest, watch, series } = require("gulp");
const babel = require("gulp-babel");

task("js",()=>{
    return src("src/*.js").pipe(babel()).pipe(dest("dist/js"));
})
task("moveHTML",()=>{
    return src("src/*.html").pipe(dest("dist"));
});
task("watch",()=>{
    watch("src/*.js",{persistent: false},series("js"));
}); 
task("default",series('moveHTML','js'));
//you don't have to add the watch task inside the series() API and also you could delete the persistent object property


