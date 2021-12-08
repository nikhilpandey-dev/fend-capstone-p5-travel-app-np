const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        main: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-[contenthash].js',
        assetModuleFilename: "static/[name]-[contenthash][ext]",
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
            },

            {
                test: /\.scss$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new MiniCSSExtractPlugin({
            filename: '[name]-[contenthash].css'
        })
    ]
}

