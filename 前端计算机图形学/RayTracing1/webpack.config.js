const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/app.ts'),
    output: {
        filename: 'dist/app.js',
        path: __dirname
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};

