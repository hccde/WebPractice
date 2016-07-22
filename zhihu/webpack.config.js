var webpack = require('webpack')
module.exports = {
	entry:{
		login:['./js/login.es6.js'],
		index:['./js/index.es6.js'],
		detail:['./js/detail.es6.js']
	},
	output:{
		path:'./dest/output/',
		filename:"[name].js"
	},
	module:{
		loaders:[
			{test:/\.vue$/,loader:"vue"},
			{test:/\.es6.js$/,loader:"babel"},
			{test:/\.scss$/,loader:"style-loader!css-loader!sass-loader"},
			{test: /\.(png|jpg|svg)$/, loader: 'url?=dest/image/[name].[ext]'}
		]
	},
}

//browser-sync start --server --files 监听 不用webpack dev server 