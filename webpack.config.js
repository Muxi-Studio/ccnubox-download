var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './static/entry.js',
	output: {
		publicPath: './',
		path: './static',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
	  			test: /\.scss$/,
	  			loader: ExtractTextPlugin.extract('style', "css!sass")
  			},
  			{
  				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader:'url-loader?limit=10000'
  			},
  			{
  				test: /\.(png|jpg)$/,
  				loader:'url-loader?limit=8192&name=images/[name].[ext]'
  			}
		]
	},
	resolve: {
    	extensions: ['', '.js', '.scss'],
  	},
	plugins : [
	 	new ExtractTextPlugin('[name].css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin({
      		compress: {
        		warnings: false
      		}
    	})
	]
}