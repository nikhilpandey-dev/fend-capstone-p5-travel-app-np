const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        assetModuleFilename: "asset-dev/images/[name][ext]",
        clean: true
    },
    stats: 'normal',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ],
    },
});

