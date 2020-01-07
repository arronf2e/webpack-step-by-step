const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}