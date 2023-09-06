const path = require("path")
const HtmlWeabpckPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".cjs", ".json"]
    },
    devServer: {},
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
        ]
    },
    plugins: [
        new HtmlWeabpckPlugin({
            template: "./index.html"
        })
    ]
}