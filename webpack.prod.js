const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: "static/[name].[contenthash][ext]",
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CSSMinimizerWebpackPlugin()]
    },
    stats: 'normal',
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new WorkboxPlugin.GenerateSW()
    ]
});

