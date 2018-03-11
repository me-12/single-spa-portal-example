const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
	entry: {
		singleSpaEntry: 'src/singleSpaEntry.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'release'),
        libraryTarget: 'umd',
        library: 'app3'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
                test: /\.html$/,
                exclude: /node_modules|svelte/,
                loader: 'html-loader',
            },
		],
	},
	resolve: {
        "extensions": [
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
