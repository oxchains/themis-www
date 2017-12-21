const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common,{
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Themis：数字货币世界去中心化的"支付宝',
            template: 'index.ejs',
            publicPath: './',
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
