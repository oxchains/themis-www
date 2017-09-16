const path = require('path');
const webpack = require('webpack');

let prod = process.env.NODE_ENV === 'production';

const static = [
    "./public/js/vendor/jquery/jquery.min.js",
    // "./public/js/vendor/jquery-migrate/jquery-migrate.min.js",
    "./public/js/vendor/jquery.easing/js/jquery.easing.js",
    // "./public/js/vendor/tether.min.js",
    "./public/js/vendor/bootstrap/bootstrap.min.js",
    "./public/js/vendor/dzsparallaxer/dzsparallaxer.js",
    "./public/js/js/hs.core.js",
    "./public/js/js/components/hs.header.js",
    "./public/js/js/helpers/hs.hamburgers.js",
    "./public/js/js/components/hs.scroll-nav.js",
    // "./public/js/vendor/revolution-slider/revolution/js/jquery.themepunch.tools.min.js",
    "./public/js/vendor/revolution-slider/revolution/js/jquery.themepunch.revolution.min.js",
    "./public/js/vendor/revolution-slider/revolution-addons/typewriter/js/revolution.addon.typewriter.min.js",
    "./public/js/vendor/revolution-slider/revolution/js/extensions/revolution.extension.layeranimation.min.js",
    "./public/js/vendor/revolution-slider/revolution/js/extensions/revolution.extension.navigation.min.js",
    "./public/js/vendor/revolution-slider/revolution/js/extensions/revolution.extension.parallax.min.js",
    "./public/js/vendor/revolution-slider/revolution/js/extensions/revolution.extension.slideanims.min.js"

]
module.exports = {
    // entry: [
    //     "./src/index.js",
    // ],
    entry: {
        'vendor': static,
        "bundle": "./src/index.js",
        "main": "./public/js/main.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[chunkhash:8].js",
        publicPath: prod ? "https://static.oxchains.com/themis-www/" : ""
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            // {test: /\.html$/, loader: 'html-loader'},
            //{test: /\.ejs$/, loader: "ejs-loader?variable=data"},
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192&name=public/[hash:8].[name].[ext]',
                options: {
                    publicPath: "/"
                }
            }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor',
            minChunks: Infinity
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
};
