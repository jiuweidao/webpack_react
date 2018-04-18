const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const publicPath = '/';
module.exports = {
    entry: './js/app.js',
    // entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        publicPath: publicPath,
        contentBase: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules', 'react')
        }
    },
    performance: {hints: false},
    mode: 'development',//development，production
    plugins: [
        new CleanWebpackPlugin(['dist']),
        /*new HtmlWebpackPlugin({
            title: 'Output Management'
        })*/
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', //打包文件名
        publicPath: publicPath,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            /* {
                 test: /\.(js|jsx)$/,
                 loader: 'babel-loader',
                 exclude: /node_modules/,
                 query: {
                     presets: ['react', 'es2015']
                 }
             },*/
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                    plugins: ["react-hot-loader/babel"]
                },
            },

        ]
    },

}