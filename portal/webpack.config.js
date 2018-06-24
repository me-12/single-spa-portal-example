const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: 'src/portal.js',
	},
	output: {
		publicPath: '',
		filename: '[name].js',
		path: path.resolve(__dirname, 'release'),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			}
		],
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
        CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'src/index.html')},
            {from: path.resolve(__dirname, 'src/style.css')},
            {from: path.resolve(__dirname, 'libs/system.js')},
        ]),
		new CleanWebpackPlugin(['release'])
	],
	devtool: 'source-map',
	externals: [
	],
    mode: 'development',
    devServer: {
		contentBase: './release',
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
		// Proxy config for development purposes. In production, you would configure you webserver to do something similar.
        proxy: {
            "/app1": {
                target: "http://localhost:9001",
                pathRewrite: {"^/app1" : ""}
            },
            "/app2": {
                target: "http://localhost:9002",
                pathRewrite: {"^/app2" : ""}
            },
            "/app3": {
                target: "http://localhost:9003",
                pathRewrite: {"^/app3" : ""}
            },
            "/app4": {
                target: "http://localhost:9004",
                pathRewrite: {"^/app4" : ""}
            },
            "/app5": {
                target: "http://localhost:9005",
                pathRewrite: {"^/app5" : ""}
            }
        }
    }
};
