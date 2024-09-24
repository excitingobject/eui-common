const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'eui-common',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [            
            {
                test: /\.(tsx|ts|js)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        [
                            '@babel/preset-react',
                            {
                                'runtime': 'automatic' // tsx파일 react 임포트 코드 생략
                            }
                        ],
                        '@babel/preset-typescript'
                    ],
                    compact: true // Babel 코드를 더 간결하게 변환하여 최종 번들 크기를 줄임
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