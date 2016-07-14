var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './resources/js/main.js',
    output: {
        path: path.resolve(__dirname, 'resources'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
        test: /\.js$/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
            query: {
              presets: ['react-hot', 'es2015']
            },
            exclude: /node_modules/
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
