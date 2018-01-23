const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
	entry: {
		main: 'src/app2.js',
		store: 'src/app2Store.ts'
	},
	output: {
		publicPath: '/release/',
		filename: '[name].js',
		path: path.resolve(__dirname, 'release'),
        libraryTarget: 'umd',
        library: 'app2'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
        "extensions": [
            ".ts",
            ".js"
        ],
		modules: [
			__dirname,
			'node_modules',
		],
	},
	devtool: 'none',
	externals: [
	],
	plugins: [
        new ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            path.resolve(__dirname, '../src')
        )
	],
    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
};
