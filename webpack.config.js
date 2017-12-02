var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSass = new ExtractTextPlugin({
    filename: "build/index.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "build/index.js"
    },
    // Add sass-loader
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        },
            {
                test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff",
                options: {
                    name: 'build/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                options: {
                    name: 'build/[name].[ext]'
                }
            }
            ]
    },
    plugins: [
        extractSass
    ]
};