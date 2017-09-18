const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
<<<<<<< HEAD
            title: 'Custom template',
            template: 'index.html',
=======
            title: 'Themis：数字货币世界去中心化的"支付宝',
            template: 'index.ejs',
            publicPath: './'
>>>>>>> 35891682cf5afc5b3c1f7610d595528220231d6f

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
