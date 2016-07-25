/**
* 1.将css文件合并压缩后放到dist/css下
* 2.将template文件压缩后放到dist/template下
* 3.将src下js文件合并压缩后放到dist/js下
* 4.将main.html文件使用cssmin，jsmin替换后，并压缩，然后放到dist下
* 5.最后别忘了将requirejs源文件移过去
*/

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	cleanCss = require('gulp-clean-css'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require("gulp-uglify"),
	clean = require('gulp-clean'),
	usemin = require('gulp-usemin'),
	replace = require('gulp-regex-replace'),
	requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('clean', function(){
	return gulp.src('./dist')
		.pipe(clean());
});

// 执行第一步
gulp.task('css', function(){
	return gulp.src('./css/*.css')
		.pipe(concat('main.css'))
		.pipe(cleanCss())
		.pipe(gulp.dest('./dist/css/'));
});

// 执行第二步
gulp.task('template', function(){
	return gulp.src('./template/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/template/'));
});

// 合并压缩js文件
gulp.task('js', function(){
	return gulp.src('./src/main.js')
		.pipe(requirejsOptimize(function(){
			return {
				mainConfigFile: './src/main.js'
			}
		}))
		.pipe(uglify())
		.pipe(concat("main.min.js"))
		.pipe(gulp.dest('./dist/js'));
});

// 处理main.html
gulp.task('main', function(){
	return gulp.src('./main.html')
		.pipe(usemin())
		.pipe(replace({
			regex: 'src="bower_components/requirejs/require.js" data-main="src/main"',
			replace: 'src="js/require.js" data-main="js/main.min"'
		}))
		.pipe(htmlmin())
		.pipe(gulp.dest('./dist'))
});

// 处理requirejs
gulp.task('requirejs', function(){
	return gulp.src('./bower_components/requirejs/require.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['clean'], function(){
	gulp.start('css', 'template', 'js', 'main', 'requirejs');
});



