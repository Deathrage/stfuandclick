const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonPath = './assets/';
module.exports = {
	mode: 'development',
	entry: [
		path.resolve(process.cwd(), commonPath + 'js/app.tsx'),
		path.resolve(process.cwd(), commonPath + 'scss/import.scss'),
	],
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.scss'],
	},
	output: {
		path: path.resolve(process.cwd(), './public'),
		filename: 'app.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?/,
				loader: 'ts-loader',
			}, {
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: '[id].css',
		}),
	],
};
