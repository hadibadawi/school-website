const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Generator } = require('webpack');
const { text } = require('stream/consumers');
const { type } = require('os');

module.exports = {
  mode: 'development',

  entry: './src/js/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    static: './dist',
    port: 3000,
    open: {
      app: {
        name: 'chrome', // أو 'chrome' على ويندوز أحياناً
      },
    },
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]',
        },
      },
      {
        test:/\.html$/,
        loader:'html-loader',
      },

      { 
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'main.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/main2.html',
      filename: 'main2.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/form.html',
      filename: 'form.html',
    }),
  ],
};