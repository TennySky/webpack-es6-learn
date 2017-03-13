var path = require("path");
var htmpWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
    entry:  "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: "babel-loader?presets[]=env",
                exclude: /(node_modules|idea)/
            }
        ]
    },
    plugins:[
        new htmpWebpackPlugin({
            title: "this a title",
            filename: "index.html",
            template: "./src/index.html",
            inject: "body"
        })
    ]
}

module.exports = webpackConfig;
