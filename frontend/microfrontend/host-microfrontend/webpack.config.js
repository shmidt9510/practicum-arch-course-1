const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  output: {
    publicPath: 'http://localhost:3000/',
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
      name: 'Host',
      remotes: {
        Grid: 'Grid@http://localhost:3001/remoteEntry.js',
        Profile: 'Profile@http://localhost:3002/remoteEntry.js',
        ImageController: 'ImageController@http://localhost:3003/remoteEntry.js',
      },
      shared: { 
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};