const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: 'bundle.js',
        // webpack不使用箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                      loader: 'babel-loader' ,
                      options: {
                          presets: [
                              [
                                  "@babel/preset-env",
                                  {
                                      targets: {
                                          'chrome': '88',
                                          'ie': '11'
                                      },
                                      'corejs': '3',
                                      // usage：按需加载
                                      'useBuiltIns': 'usage'
                                  }
                              ]
                          ]
                      }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            },

            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.ts', '.js']
    }
}