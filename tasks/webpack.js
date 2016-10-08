'use strict';

import gutil from 'gulp-util';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const DEBUG = !process.argv.includes('--release');

const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 39',
    'Firefox >= 38',
    'Explorer >= 7',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 5'
];

/**
 * Сборка JavaScript и CSS
 * @param options
 * @returns {Function}
 */
module.exports = function(options) {
    return function(callback) {

        var firstBuildReady = true;

        webpack({
            entry: options.src,
            output: {
                path: options.dst,
                publicPath: '/assets/',
                filename: "[name].js"
            },
            externals: {
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            },
            watch: DEBUG,
            devtool: DEBUG ? 'source-map' : null,
            resolve: {
                modulesDirectories: ['node_modules'],
                extensions: ['', '.js']
            },
            resolveLoader: {
                modulesDirectories: ['node_modules'],
                moduleTemplates: ['*-loader', '*'],
                extensions: ['', '.js']
            },
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: [
                        /node_modules/,
                    ],
                    loader: 'babel'
                }, {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract('style', `css?${JSON.stringify({ sourceMap: DEBUG, minimize: !DEBUG, autoprefixer: false })}!postcss!sass`)
                }, {
                    test: /\.(jpg|jpeg|gif|png|svg)$/,
                    exclude: /node_modules/,
                    loader:'url?limit=1024&name=images/[name]-[hash:6].[ext]'
                }, {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    exclude: /node_modules/,
                    loader: 'url?limit=1024&name=fonts/[name].[ext]'
                }]
            },
            plugins: [
                new webpack.NoErrorsPlugin(),
                new ExtractTextPlugin('[name].css'),
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery'
                }),
                ...DEBUG ? [] : [
                    new webpack.optimize.UglifyJsPlugin({
                        compress: {
                            screw_ie8: true,
                            warnings: false
                        },
                    })
                ]
            ],
            sassLoader: {
                includePaths: [
                    "./src/styles"
                ]
            },
            postcss: function() {
                return {
                    defaults: [
                        autoprefixer({browsers: AUTOPREFIXER_BROWSERS})
                    ]
                };
            }
        }, function (err, stats) {

            if (err) throw new gutil.PluginError("webpack", err);

            gutil.log(stats.toString({
                colors: true,
                hash: true,
                chunks: false,
                children: false
            }));

            if (firstBuildReady) {
                callback();
                firstBuildReady = false;
            }
        });

    }

};