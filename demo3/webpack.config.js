const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        pageA: './pageA',
        pageB: './pageB',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        // https://webpack.docschina.org/plugins/split-chunks-plugin/
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 1,
                    priority: 0
                },
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10
                }
            }
        }
    }
}