/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { baseConfig } = require("@blueprintjs/webpack-build-scripts");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { sassConfig, postCssConfig } = require('./shared.config')


module.exports = Object.assign({}, baseConfig, {
    entry: {
        "styler-app": "./src/index.tsx",
        "default-styles": "./src/_default-styles/styler-styles.scss",
        "new-styles": "./src/_new-styles/styler-styles.scss",
        "antd-like-styles": "./src/_antd-like-styles/styler-styles.scss",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: require.resolve("awesome-typescript-loader"),
                options: {
                    configFileName: "./src/tsconfig.json",
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            // necessary to minify @import-ed files using cssnano
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                        options: postCssConfig
                    },
                    {
                        loader: require.resolve("sass-loader"),
                        options: sassConfig
                    }
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
                loader: require.resolve("file-loader"),
                options: {
                    name: "[name].[ext]?[hash]",
                    outputPath: "assets/",
                },
            },
        ],
    },
    plugins: baseConfig.plugins.concat([
        new CopyWebpackPlugin([
            // to: is relative to dist/
            { from: "src/index.html", to: "." },
            { from: "src/assets/favicon.png", to: "assets" },
        ])
    ]),
});
