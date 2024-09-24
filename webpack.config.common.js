const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'eui-common',
    resolve: {},
    module: {},
    entry: {},
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}