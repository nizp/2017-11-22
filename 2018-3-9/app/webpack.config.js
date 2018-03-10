const path = require('path');
//处理html模板的，可以自动引入js
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css分离
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack');

//自动打开浏览器的
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

let cssExtract = new ExtractTextPlugin({
	filename: '[name].css',
	disable: true
});

const wp = {
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'build'),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['react','env']
                    }
                }
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'./index.html',
            template:'./index.html'
        }),
        cssExtract,
        new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer:{
        hot: true, // 告诉 dev-server 我们在使用 HMR
	    // contentBase: path.resolve(__dirname),
	    publicPath: '/',
	    port: 3000
    }
}


module.exports = wp;
