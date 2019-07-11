const path = require("path");
const entryPath = "src";
const entryFile = "app.js";
const Html = require('html-webpack-plugin');
const MiniCSS = require("mini-css-extract-plugin");
const Compression = require("compression-webpack-plugin");

module.exports = function (env) {
    let isDev = !!env.dev;
    let isProd = !!env.prod;
    const config = {};

    config.entry = `./${entryPath}/scripts/${entryFile}`;

    config.output = {
        filename: isDev ? "out.js" : "out.[chunkhash].js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    };

    config.mode = isProd? "production" : "development";
    config.devtool = isProd? false : "source-map";


    config.module = {};
    config.module.rules = [];

    const browsers = {
        dev: ['Chrome > 60'],
        prod: ['> 1%']
    };

    const js = {
        test: /\.js$/, exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ["@babel/preset-env", {
                        targets: {
                            browsers: isDev ? browsers.dev : browsers.prod
                        }
                    }]
                ],
                plugins: [
                    'syntax-dynamic-import'
                ]
            }
        }
    };

    const scss = {
        test: /\.scss$/,
        use: [
            isProd
                ? MiniCSS.loader
                :
                {   loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: !isProd,
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [
                        require('precss'),
                        require('autoprefixer')({
                            browsers: isProd
                                ? browsers.prod : browsers.dev
                        })
                    ]
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: !isProd,
                    minimize: isProd
                }
            },
        ]
    };

    const images = {
        test: /\.(jpg|jpeg|gif|png|csv)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: isProd
                    ? '[name].[hash].[ext]'
                    : '[name].[ext]',
                publicPath: 'images',
                outputPath: 'images'
            }
        }
    };

    const fonts = {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: isProd
                    ? '[name].[hash].[ext]'
                    : '[name].[ext]',
                publicPath: 'fonts',
                outputPath: 'fonts'
            }
        }
    };

    config.module.rules.push(js);
    config.module.rules.push(scss);
    config.module.rules.push(images);
    config.module.rules.push(fonts);

    const Clean = require(
        'clean-webpack-plugin'
    );

    config.plugins = [];

    if(isProd) {
        config.plugins.push( new MiniCSS(
            { filename: 'main.[chunkhash].css' } )
            // { filename: 'main.css' } )
        )
    }

    config.plugins.push( new Html({
            filename: 'index.html',
            template: `./${entryPath}/app.html`,
            minify: isProd
                ? { collapseWhitespace: true }
                : false
        })
    );
    if(isProd) {
        config.plugins.push( new Compression({
                threshold: 0,
                minRatio: 0.8
            })
        );
    }

    if(isProd) {
        config.plugins.push(
            new Clean(['build'])
        );
    }

    if(isDev) {
        config.devServer = {
            contentBase: path.join(__dirname, `./${entryPath}`),
            port: 3001,
            compress: true,
            progress: true,
            overlay: true
        }
    }

    return config;
};
