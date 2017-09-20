const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
const webpack=require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common,{
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Themis：数字货币世界去中心化的"支付宝',
            template: path.join(__dirname, 'index.ejs'),
            publicPath: 'https://static-cdn.oxchains.com/themis-www/',
            filename: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new CopyWebpackPlugin([{
            from: './public/img',
            to: 'public/img',
        }
        ]),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: '"production"'}
        })
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    }
});
