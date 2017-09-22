var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpack = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:{
		index:'./src/js/index.js',
		cart:'./src/js/cart.js',
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename: 'js/[name].js',
		publicPath:''
	},
	module:{
		rules:[
			{
				test:'/\.css$/',
				use:[
					'style-loader',
					{loader:'css-loader',options:{modules:true,importLoaders:1}}
				],
				include:path.resolve(__dirname,'src/css'),
				exclude:/node_modules/
				// use: ExtractTextPlugin.extract({
				// 	fallback: "style-loader",
				// 	use: "css-loader"
				// })
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename:'index-1.html',
			title:'Home',
			template:'./src/index.html',
			chunks:['index']
		}),
		new htmlWebpackPlugin({
			filename:'cart-1.html',
			title:'Cart',
			template:'./src/cart.html',
			chunks:['cart']
		}),
		new cleanWebpack(['./dist'],{
			root: '',
      verbose: true,
      dry: false
		}),
		new ExtractTextPlugin('index.css')
	]
	// devtool:"source-map"
}