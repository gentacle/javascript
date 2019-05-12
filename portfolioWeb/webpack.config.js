const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // only enable hot in development
            hmr: process.env.NODE_ENV === 'development',
            // if hmr does not work, this is a forceful method.
            reloadAll: true,
          },
        },
         'css-loader'],
    }],
  },

  plugins: [
    // 기타 플러그인
    new MiniCssExtractPlugin({ filename: 'app.css' }),
  ],

  //출력
  output:{
    path : path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath:'/dist/',
  },
};