const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/pages/index/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    overlay: true,
    host: 'localhost',
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        exclude: [
          path.resolve(__dirname, 'src/fonts')
        ],
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, 'src/fonts')
        ],
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /(\.scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
    }),
    new CleanWebpackPlugin({
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pages/index/index.pug'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/fonts/', to: 'fonts'}
      ]
    })
  ]
};
