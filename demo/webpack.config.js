const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './index.js'),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}