var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }],
        exprContextCritical: false
    },
    plugins: [
        extractSass
    ]
};