const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'index.html',

        }),
        new CopyWebpackPlugin([{
            from: './public',
            to: 'public'
        }])
    ],
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    }
});
