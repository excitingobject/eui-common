const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'hidden-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        clean: true
    },
});