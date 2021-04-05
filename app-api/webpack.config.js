const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = (config, { mode }) => {
    return {
        target: 'node',
        entry: path.join(__dirname, 'src/index.ts'),
        mode,
        output: {
            path: path.join(__dirname, 'dist'),
            filename: "[name].bundle.js",
            chunkFilename: '[name].js'
        },
        context: __dirname,
        devServer: {
            contentBase: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            modules: [__dirname, path.join(__dirname, 'src'), 'node_modules'], 
            extensions: ['.ts', '.js'],
        },
        plugins: [
            new NodePolyfillPlugin(),
            new webpack.EnvironmentPlugin([
                'NODE_ENV',
                'APP_HOST', 
                'APP_PORT', 
                'APP_API_PREFIX',
                'APP_UI_ORIGIN',        
                'APP_TOKEN_SALT',  
                'APP_TYPE_TOKEN_ACCESS',
                'APP_TYPE_TOKEN_REFRESH',
                'APP_TOKEN_ACCESS_EXPIRES_IN',
                'APP_TOKEN_REFRESH_EXPIRES_IN'
            ]),
        ],
    }
};