import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import path from 'path';
import merge from 'webpack-merge';
import baseConfig from './webpack.base';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const devConfig: Configuration = {
  output: {
    path: path.join(__dirname, '../public'),
    publicPath: '/',
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
    ]
  },
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  devtool: 'cheap-source-map',
};

export default merge(baseConfig, devConfig);
