const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        'test': [`./src/entry.js`],
    },

    output: {
        path: `${__dirname}/build`,
        filename: '[name].bundle.[chunkhash].js',
        chunkFilename: '[name].chunk.[chunkhash]_[localeString].js',
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: ['node_modules', './src'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /(node_modules)/,
                include: [`${__dirname}/src`],
            },
        ],
    },
};
