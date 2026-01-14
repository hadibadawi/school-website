const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin"); 

module.exports = {
  mode: 'production', 
  entry: './src/js/index.js',

  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '', 
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css", 
    }),
    
   
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "src/assets/imgas"), 
          to: "assets/imgas" 
        },
      ],
    }),

    new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: './main.html', filename: 'main.html' }),
    new HtmlWebpackPlugin({ template: './main2.html', filename: 'main2.html' }),
    new HtmlWebpackPlugin({ template: './form.html', filename: 'form.html' }),
  ],
};