var webpack = require('webpack')
module.exports = {
	entry:{
		login:['webpack/hot/dev-server','./js/login.es6.js'],
		index:['./js/index.es6.js']
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
			{test: /\.(png|jpg)$/, loader: 'url?limit=8192=dest/image/[name].[ext]'}
		]
	},
	watch:true,
	 plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
}

//browser-sync start --server --files 监听 不用webpack dev server 