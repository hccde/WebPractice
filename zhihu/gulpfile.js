 'use strict'
 let gulp = require('gulp'),
 	sass = require('gulp-sass'),
 	babel = require('gulp-babel'),
 	webpack = require('webpack'),
 	notify = require('gulp-notify')

 gulp.task('watch', () => {
 	gulp.watch('scss/*.scss', ['sass']);
 	gulp.watch('js/*.es6.js', ['babel', 'webpack']);

 })

 gulp.task('sass', () => {
 	return gulp.src('scss/*.scss').pipe(sass().on('error', function() {
 		var args = Array.prototype.slice.call(arguments);

 		notify.onError({
 			title: 'compile error',
 			message: '<%=error.message %>'
 		}).apply(this, args); //替换为当前对象
 		this.emit(); //提交
 	})).
 	pipe(gulp.dest('dest/css/'))
 })

 gulp.task('webpack', function(cb) {
 	webpack('./webpack.config.js', (err, stats) => {
 		console.log(stats.toString())
 		cb()
 	})
 })

 gulp.task('babel', () => {
 	return gulp.src('js/*.es6.js').pipe(babel()).pipe(gulp.dest('dest/js/'))
 })

 gulp.task('default',() => {
 	gulp.run(['sass', 'babel', 'watch'])
 });

 gulp.run()