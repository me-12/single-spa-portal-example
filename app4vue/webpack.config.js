const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
	entry: {
		main: 'src/app4.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'release'),
        libraryTarget: 'umd',
        library: 'app4'
	},
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
	resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [
            ".js", ".vue"
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
