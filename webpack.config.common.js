const path = require('path');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'eui-common',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@/src': path.resolve(__dirname, 'src')
        }
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
            }, {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader', // inject CSS to page
                    'css-loader', // translates CSS into CommonJS modules
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    'sass-loader', // compiles Sass to CSS
                ]
            }
        ]
    },
    entry: {
        app: ['@babel/polyfill', './src/App']
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}