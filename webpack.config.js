const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin"); 
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); //  للصور 1. استدعاء الإضافة

module.exports = {
  mode: 'production', 
  
  entry:{
    index:'./src/js/index.js',
    main: './src/js/main.js'
  }, 

  output: {
    filename: 'js/[name].bundle.js',
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

  // 2. إضافة قسم التحسين (Optimization) للضغط للصور
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors', // سيتم إنشاء ملف باسم vendors.bundle.js
    },
    minimizer: [
      "...", 
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ["svgo", { name: "preset-default" }],
            ],
          },
        },
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
     filename: "css/[name].css",
    }),
    
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "src/assets/imgas"), 
          to: "assets/imgas" 
        },
      ],
    }),

    new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html', chunks:['index'] }),
    new HtmlWebpackPlugin({ template: './main.html', filename: 'main.html',chunks:['main'] }),
    new HtmlWebpackPlugin({ template: './main2.html', filename: 'main2.html',chunks:['main'] }),
    new HtmlWebpackPlugin({ template: './form.html', filename: 'form.html',chunks:['index'] }),
  ],
};