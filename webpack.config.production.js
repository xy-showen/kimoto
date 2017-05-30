var path = require('path');
var baseConfig = require('./webpack.config.base.js');
var webpack = require('webpack');

var projectDir = path.join(__dirname, "www");

module.exports = Object.assign({}, baseConfig, {
    devtool: null,
    plugins: (baseConfig.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
});
