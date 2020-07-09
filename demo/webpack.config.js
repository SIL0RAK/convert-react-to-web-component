const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './index.js'),
        angularApp: path.resolve(__dirname, './angular-app.js')
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
        contentBase: path.resolve(__dirname),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}