module.exports = {
    entry: './src/create.ts',
    mode: 'production',
    output: {
        library: 'convert-react-to-web-component',
        libraryTarget: 'umd',
    },
    externals: {
        react: 'react',
        "react-dom": 'react-dom'
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    }
}