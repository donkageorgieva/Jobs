/* eslint-disable no-undef */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    mode: 'production',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets'),
        publicPath: './assets'

    },
    devServer: {
        contentBase: './'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]

 
};
