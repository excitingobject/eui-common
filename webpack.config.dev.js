const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {        
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        host: "0.0.0.0", // default : 127.0.0.1 
        port: 3000,
        compress: true,
        hot: true,
    }
})