
module.exports = {
	entry:{
		login:['./js/login.es6.js'],
		index:['./js/index.es6.js','webpack/hot/dev-server']
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
	}
}