const
    HtmlWebPackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    VueLoaderPlugin = require("vue-loader/lib/plugin"),
    path = require('path'),
    webpack = require("webpack");

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/bundle',
        filename: 'bundle.min.js'
    },

    devServer: {
        port: 6060,
        contentBase: "app"
    },

    module: {
        rules: [
            {
                test: /\.(js|es6|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "stylus-loader"
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./app/index.html",
            filename: "./index.html"
        }),

        new MiniCssExtractPlugin({
            filename: "bundle.min.css",
            chunkFilename: "[id].css"
        }),

        new VueLoaderPlugin()
    ]
};