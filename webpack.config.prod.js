// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
var webpack = require ('webpack');
var ExtractTextPlugin = require ( 'extract-text-webpack-plugin');
var HtmlWebpackPlugin = require ( 'html-webpack-plugin');
var autoprefixer = require ( 'autoprefixer');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    debug: true,
    noInfo: true,
    entry: path.resolve(__dirname, 'app/app'),
    target: 'web',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './dist/bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: 'app/app.js',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            trackJSToken: ''
        }),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    postcss: ()=> [autoprefixer]
};
