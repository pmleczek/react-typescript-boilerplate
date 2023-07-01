const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/",
        port: 3000,
        hot: true,
        open: true,
    },
    module: {
        rules: [],
    },
    plugins: [],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
