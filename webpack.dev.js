const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        assetModuleFilename: "images/[name][ext]",
        clean: true
    },
    stats: 'normal',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]
}

