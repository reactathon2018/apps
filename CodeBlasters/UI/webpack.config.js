require('babel-polyfill');
const path = require('path');
var config = {
    context:__dirname,
    entry:
    [
        'babel-polyfill',
        './index.js'
    ],
    output:{
        path: path.resolve(__dirname,'/'),
        filename:'bundle.js'
    },
    node:{
        net:'empty'
    },
    devServer:{
        inline: true,
        port:8080,
        proxy:{
            '/eventpage/*':'http://localhost:3000'
        },
        hot:true,
        historyApiFallback : true
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude :[
                    path.resolve(__dirname, "/node_modules/")
                ],
                loader : 'babel-loader',
                query:{
                    plugins:["transform-decorators-legacy","transform-class-properties"],
                    presets:["es2015","react","stage-3"]
                }
            }
        ],
    }
}
module.exports = config;