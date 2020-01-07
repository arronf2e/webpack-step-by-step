const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,  // 忽略node_modules下的 js 
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}