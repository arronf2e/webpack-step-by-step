const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        publicPath: __dirname + '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}