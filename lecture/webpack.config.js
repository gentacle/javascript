const path = require('path');

module.exports={
    name: 'word-relay-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve:{
        extensions:['.js','.jsx']
    },
    
    entry:{
        app: ['./client.jsx'], //'./WordRelay.jsx'를 client.jsx에서 불러옴.필요없음.
    },//입력

    module: {
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['>5% in KR'],
                        },
                        debug:true,
                    }],
                    '@babel/preset-react'
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                
                ],
            },
        }],
    },
    
    plugins:[],

    output:{
        path: path.join(__dirname, 'dist'), //C:\workspace\javascript\lecture\dist
        filename: 'app.js'
    },//출력

};