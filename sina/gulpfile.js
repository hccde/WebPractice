// 引入 gulp
var gulp = require('gulp'); 
// 引入组件
// var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var dirConfig = {
    codejs:'js/',
    outjs:'out/js',
    scss:'scss/',
    css:'out/css',
}

// 检查脚本
// gulp.task('lint', function() {
//     gulp.src(dirConfig.codejs+'/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

gulp.task('complie',function(){
    gulp.src(dirConfig.codejs+'*.es6.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(dirConfig.outjs))
})

// 编译Sass
gulp.task('sass', function() {
    gulp.src(dirConfig.scss+'*.scss')
        .pipe(sass())
        .pipe(gulp.dest(dirConfig.css));
});

// 合并，压缩文件
// gulp.task('scripts', function() {
//     gulp.src('./js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist'));
// });

// 默认任务
gulp.task('default', function(){
    gulp.run('complie', 'sass');
    // 监听文件变化
    gulp.watch('/Users/admos/WebPractice/js/*.js', function(){
        console.log('change')
        gulp.run('complie', 'sass');
    });
});