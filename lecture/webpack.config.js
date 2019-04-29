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
    output:{
        path: path.join(__dirname, 'dist'), //C:\workspace\javascript\lecture\dist
        filename: 'app.js'
    },//출력

};