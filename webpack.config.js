const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.[chunkhash:8].js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },{
            test: /\.html$/,
            loader: "html-loader"
        }]
    },
    resolve: {
        extensions: [ '.js', '.jsx',  '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
            from: './public',
            to: 'public'
        }])
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
