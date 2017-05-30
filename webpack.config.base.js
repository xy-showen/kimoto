var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var projectDir = path.join(__dirname, 'www');

// this settings used to solve wf-shared can not be babeled as we expected
// see this issue about why we add this https://github.com/babel/babel-loader/issues/149
const babelSettings = {
    extends: path.join(__dirname, '/.babelrc')
}

module.exports = {
    context: projectDir,
    cache: true,
    entry: {
        'bundle': './js/app.js',
        'vendor': [
            'angular',
            'jquery',
            'jquery-sticky',
            'angular-ui-router',
            'angular-ui-bootstrap'
        ],

        // css below
        'base': './css/base.scss',
    },
    output: {
        path: path.join(projectDir, '../build'),
        publicPath: '/static/',
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['ng-annotate', 'babel-loader?' + JSON.stringify(babelSettings)]
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(['css', 'sass'])
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(woff|woff2|ttf|eot|svg|png|gif|ico|jpg)($|\?)/,
            loader: 'file-loader?name=' + '[name].[ext]'
        }, {
            test: /\.(html|json|txt)$/,
            loader: 'raw'
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new CopyWebpackPlugin([{
            from: 'image',
            to: 'image'
        }], {
            ignore: ['.DS_Store']
        })
    ],
    resolve: {
        root: [
            path.resolve(projectDir + '/js'),
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    devtool: 'cheap-source-map',
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: 9999
    }
}
