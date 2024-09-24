const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'eui-common',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ]
                }
            },
        ]
    },
    entry: {
        app: ['@babel/polyfill', './src/App']
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}