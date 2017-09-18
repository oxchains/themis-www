const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
const webpack=require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common,{
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.ejs'),
            publicPath: 'https://static.oxchains.com/themis-www/',
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
            from: './public/css',
            to: 'public/css',
        },{
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
