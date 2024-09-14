const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3005,
  },
  output: {
    publicPath: 'http://localhost:3005/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'Auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthComponent': './src/AuthComponent',
      },
      shared: { 
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};
