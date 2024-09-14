const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
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
      name: 'Grid',
      filename: 'remoteEntry.js',
      exposes: {
        './GridComponent': './src/GridComponent',
      },
      remotes: {
        ImageView: 'ImageView@http://localhost:3004/remoteEntry.js',
      },
      shared: { 
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};