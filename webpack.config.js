const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var prod = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.[chunkhash:8].js',
        // path: path.resolve(__dirname, prod ? "./dist" : "./dist"),
        // filename: prod ? "bundle.[chunkhash:8].js" : "bundle.[chunkhash:8].js",
        // publicPath: prod ? "https://static.oxchains.com/themis-www/" : "／"
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
