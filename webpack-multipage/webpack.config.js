var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpack = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry:{
		vender:['jquery','./src/js/common.js'],
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
				test:/\.css$/,
				// use:[
				// 	'style-loader',
				// 	'css-loader'
				// ],
				include:path.resolve(__dirname,'src/css'),
				exclude:/node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test:/\.js$/,
				include:path.resolve(__dirname,'src/js'),
				exclude:/node_modules/,
				use:[
					"babel-loader"
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name:'vender',
			chunks:['index','cart','vender'],
			mikChunks:3
		}),
		new htmlWebpackPlugin({
			filename:'index-1.html',
			title:'Home',
			template:'./src/index.html',
			chunks:['index','vender']
		}),
		new htmlWebpackPlugin({
			filename:'cart-1.html',
			title:'Cart',
			template:'./src/cart.html',
			chunks:['cart','vender']
		}),
		new cleanWebpack(['./dist'],{
			root: '',
      verbose: true,
      dry: false
		}),
		new ExtractTextPlugin('main.css'),
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery'
		})
		
	]
	// devtool:"source-map"
}