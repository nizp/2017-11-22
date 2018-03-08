const path = require('path');

module.exports = {
    entry:{
        ppa:'./es7'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test:/\.css$/
            }
        ]
    }
}