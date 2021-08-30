const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',

    output: {
        // path: './dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin()
    ]
}