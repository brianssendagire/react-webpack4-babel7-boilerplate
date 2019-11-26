const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('./src/config/config');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|jpe?g|svg)$/i,
                use: "file-loader",
                include: path.join(__dirname, "src")
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpe?g)$/, loader: 'url-loader?limit=100000' },
        ]
    }
,
    devServer: {
        port: config.port
    }
};
