const
    HtmlWebPackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    VueLoaderPlugin = require("vue-loader/lib/plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    path = require('path'),
    webpack = require("webpack"),
    autoprefixer = require("autoprefixer");

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
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "stylus-loader"
                ]
            }
        ]
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
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

        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),

        new VueLoaderPlugin()
    ]
};