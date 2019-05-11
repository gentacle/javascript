const path = require('path');

module.exports = {
  name: 'portfolioweb-setting',
  mode: 'development',//실서비스:production
  devtool: 'eval', //실서비스:hidden-source-map
  resolve:{
    extensions:['.js','.jsx']
  },

  //입력
  entry:{
    app:[
      './contents/scripts/client',
    ],
  },

  module: {
    rules:[{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options:{
        presets:[
          ['@babel/preset-env',{
            targets:{
              browsers:['>1% in KR'],
            },
          }],
          '@babel/preset-react'
        ],
        plugins:[
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel', //https://github.com/gaearon/react-hot-loader/
        ],
      },
    }],
  },

  plugins:{

  },

  //출력
  output:{
    path : path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath:'/dist/',
  },
};