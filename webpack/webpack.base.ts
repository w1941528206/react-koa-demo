import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';

const cwd = process.cwd();
let first = true;

class CustomDonePlugin {
  constructor() { }
  apply(compiler) {
    compiler.hooks.done.tap('DonePlugin', () => {
      console.log('webpack 编译完成');

      // koa server
      if (first) {
        const pkg = require('../package.json');
        const shelljs = require('shelljs');
        console.log('启动 koa server');
        console.log('server', shelljs.exec, pkg.scripts['server:dev']);
        (shelljs as any).exec(
          pkg.scripts['server:dev'],
          { async: true }
        );
        first = false;
      }
    });
  }
}

const baseConfig: WebpackConfiguration = {
  entry: './app/src/index.tsx',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /.(js |ts)x ?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: 'automatic' }],
            "@babel/preset-typescript",
          ],
          plugins: [
            ["import", { libraryName: 'antd', style: 'css' }]
          ],
        }
      }],
      exclude: /node_modules/,
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@src': path.resolve(cwd, './src/'),
      '@components': path.resolve(cwd, './components/'),
    }
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CustomDonePlugin()
  ],
  stats: 'errors-only',
};

export default baseConfig;
