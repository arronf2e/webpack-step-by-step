const path = require('path')
const rimraf = require('rimraf')

rimraf('./dist', () => {})

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // rules: [
        //     {
        //         test: /\.css$/,
        //         // 在html中插入一个link标签(配合file-loader使用),一个很小众的功能，会把每个import的css都处理成一个link标签，造成加载资源的增加，不利于优化
        //         use: ['style-loader', 'file-loader']
        //     }
        // ]
        // style 标签插入
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            // singleton: true  // 如果已定义，则 style-loader 将重用单个 <style></style> 元素，而不是为每个所需的模块添加/删除单个元素。
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // minimize: true  // css 压缩
                        }
                    }
                ]
            }
        ]
    }
}