//depeart
 'use strict'
 let gulp = require('gulp'),
 	sass = require('gulp-sass'),
 	babel = require('gulp-babel'),
 	notify = require('gulp-notify');


 gulp.task('watch', () => {
 	gulp.watch('scss/*.scss', ['sass']);
 	gulp.watch('js/*.es6.js', ['babel']);
 	// gulp.watch('dest/*.html',['default'])
 })

 gulp.task('sass', () => {
 	return gulp.src('scss/*.scss').pipe(sass().on('error', function() {
 		let args = Array.prototype.slice.call(arguments);

 		notify.onError({
 			title: 'compile error',
 			message: '<%=error.message %>'
 		}).apply(this, args); //替换为当前对象
 		this.emit(); //提交
 	})).pipe(gulp.dest('dest/css/'))
 })


 gulp.task('babel', () => {
 	return gulp.src('js/*.es6.js').pipe(babel()).pipe(gulp.dest('dest/js/'))
 })

 gulp.task('default',() => {
 	gulp.run(['sass', 'babel','watch'])
 });

 gulp.run()