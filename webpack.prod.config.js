const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
const webpack=require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = Merge(common,{
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Themis：数字货币世界去中心化的"支付宝',
            template: path.join(__dirname, 'index.ejs'),
            publicPath: 'https://themis.network/',
            filename: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: '"production"'}
        }),
        new CleanWebpackPlugin(
            ['dist/bundle.*.js', 'dist/vendor.*.js', 'dist/main.*.js'],　 //匹配删除的文件
            {
                root: __dirname,         　　　　　　　　　　//根目录
                verbose:  false,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    }
});
