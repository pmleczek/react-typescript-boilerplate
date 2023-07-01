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
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
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
