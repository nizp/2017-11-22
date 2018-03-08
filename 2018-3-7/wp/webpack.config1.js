const path = require('path');
module.exports = {
    // entry:'./es7',
    entry : {
        app:'./es7'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
               test: /\.js$/,
               use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                } 
            }
        ]
    }
}