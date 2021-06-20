const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            "window.jQuery": "jquery",
            jquery: "jquery",
            "window.jquery": "jquery",
            $: "jquery",
            "window.$": "jquery",
        }),
    ],

    entry: {
        vendors: "./src/js/vendors/vendors.js",
        main: "./src/js/main.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [["@babel/preset-env", { modules: false }]],
                    },
                },
            },
        ],
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components"),
        },
    },
};
