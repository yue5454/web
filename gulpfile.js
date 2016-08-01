var gulp = require("gulp"),
sass = require("gulp-sass"),
minicss = require("gulp-minify-css"),   //压缩css
plumber = require("gulp-plumber"),
gutil = require("gulp-util"),   //输出日志，发出提示音
clean = require("gulp-clean"),
uglify = require("gulp-uglify"),  //文件压缩
// imagemin = require("gulp-imagemin"),
concatscript = require("gulp-file-concat")

var config = {
	path:"src",
	output:"dist"
}
config.script = {
	src:config.path+"/js/merge/**/*",
	con:config.path,
	dist:config.output+"/js"
}
config.comjs = {
	src:config.path+"/js/*.js",
	dist:config.output+"/js"
}
config.third = {
	src:config.path+"/third/*.js",
	dist:config.output+"/third"
}
config.style = {
	src:config.path+"/style/**/*",
	dist:config.output+"/style"
}
config.view = {
	src:config.path+"/view/**/*",
	dist:config.output+"/view"
}
config.font = {
	src:config.path+"/font/**/*",
	dist:config.output+"/font"
}
config.image = {
	src:config.path+"/image/**/*",
	dist:config.output+"/image"
}
config.home = {
	src:config.path+"/*.html",
	dist:config.output
}

function errorHandler (e) {
	gutil.beep();
	gutil.log(e);
}

gulp.task("script", function () {
	return gulp.src(config.script.src)
	.pipe(plumber())
	.pipe(uglify())
	.pipe(concatscript({
		relativeUrls:config.script.con
	}))
	.pipe(gulp.dest(config.script.dist));
});

gulp.task("comjs", function () {
	return gulp.src(config.comjs.src)
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(config.comjs.dist));
});

gulp.task("third", function () {
	return gulp.src(config.third.src)
	// .pipe(plumber())
	.pipe(gulp.dest(config.third.dist));
});

gulp.task("style", function () {
	return gulp.src(config.style.src)
	.pipe(plumber({errorHandler: errorHandler}))
	.pipe(sass({errLogToConsole: true}))
	// .pipe(minicss())
	.pipe(gulp.dest(config.style.dist));
});

gulp.task("view", function () {
	return gulp.src(config.view.src)
	.pipe(gulp.dest(config.view.dist));
});

gulp.task("font", function () {
	return gulp.src(config.font.src)
	.pipe(plumber())
	.pipe(gulp.dest(config.font.dist));
});

gulp.task("image", function () {
	return gulp.src(config.image.src)
	.pipe(plumber())
	.pipe(gulp.dest(config.image.dist));
});

gulp.task("home", function () {
	return gulp.src(config.home.src)
	.pipe(gulp.dest(config.home.dist));
});

gulp.task("watch", function () {
	gulp.watch(config.script.src,["script"]);
	gulp.watch(config.comjs.src,["script"]);
	gulp.watch(config.third.src,["third"]);
	gulp.watch(config.style.src,["style"]);
	gulp.watch(config.view.src,["view"]);
	gulp.watch(config.font.src,["font"]);
	gulp.watch(config.home.src,["home"]);
	gulp.watch(config.image.src,["image"]);
});

gulp.task("clean", function () {
	return gulp.src([config.script.dist,config.style.dist,config.image.dist,config.home.dist,config.view.dist,config.font.dist])
	.pipe(plumber())
	.pipe(clean());

});

gulp.task("cache",["script","third","style","view","font","image","home"], function () {});

gulp.task("default",["clean"], function () {
	gulp.start("cache","watch");
});

















